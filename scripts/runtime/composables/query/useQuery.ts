import { isString, get, isArray, isObject, keys, map, filter, orderBy, gt, eq, lt, includes, startsWith, endsWith, isEmpty, isNaN, isNull, isUndefined, gte, lte, sum, max, mean, min, slice, groupBy, every, some } from '../utils/helpers';
import { useQuerySerializer } from './useQuerySerializer';

type IOperators = Record<string, (...args: any[]) => unknown>;
export type IRuleObject = Record<string, Array< IRuleObject | string | number | boolean>> | string | number | boolean | undefined;
//  { "eq" , [ {get, ["state"] } , 'abc' ]}
export type IRule = IRuleObject | Array<IRule>;

export interface IPaginate {
 page: number;
 size: number;
}

const filterOperators: IOperators = {
 gt,
 gte,
 eq,
 lt,
 lte,
 and: (...args) => every(args, Boolean),
 or: (...args) => some(args, Boolean),
 includes,
 startsWith,
 endsWith,
 isEmpty,
 isNaN,
 isNull,
 isUndefined,
};

// function isEqualWithParsing(...args) {
//  const value1 = args[0];
//  const value2 = args[1];
//  // 型を合わせてパース
//  if (typeof value1 === 'string') {
//   if (value1.toLowerCase() === 'true' || value1.toLowerCase() === 'false') {
//    value1 = value1.toLowerCase() === 'true';
//   }
//   else {
//    value1 = Number.parseFloat(value1);
//   }
//  }
//  if (typeof value2 === 'string') {
//   if (value2.toLowerCase() === 'true' || value2.toLowerCase() === 'false') {
//    value2 = value2.toLowerCase() === 'true';
//   }
//   else {
//    value2 = Number.parseFloat(value2);
//   }
//  }
//  // 値を比較
//  return eq(value1, value2);
// }

const aggregateOperators: IOperators = {
 sum,
 max,
 mean,
 min,
};

export function useQuery() {
 const { deserialize } = useQuerySerializer();
 return {
  // max : 最大処理件数 filter + paginate で高速化できる sort など他の処理が必要な場合には使えない
  filter: (rules: IRule | string, dataArray: unknown[] | undefined, max: number = 1000) => {
   if (dataArray == undefined) {
    return undefined;
   }
   if (isString(rules)) {
    try {
     const deserializedRule = deserialize(rules);
     console.log(JSON.stringify(deserializedRule));
     return filterArray(deserializedRule, dataArray, max);
    }
    catch (error) {
     console.error('Error deserializing rules:', error);
    }
    return filterArray(undefined, dataArray, max);
   }
   else {
    return filterArray(rules, dataArray, max);
   }
  },
  sort: sortArray,
  aggregate: aggregateArray,
  paginate: paginateArray,
  grouping: groupingArray,

 };
}

function evaluateRule(operators: IOperators, rule: IRule, data: unknown, depth: number = 0): unknown {
 console.log('Depth:', depth);
 console.log('Evaluating rule:', rule);

 if (isArray(rule)) {
  const mapped = map(rule, r => evaluateRule(operators, r, data, depth + 1));
  console.log (mapped);
  const result = every(mapped);
  console.log('Array rule result:', result);
  return result;
 }
 else if (isObject(rule) && 'get' in rule) {
  const path = Array.isArray(rule.get) ? rule.get[0] as string : rule.get as string;
  const value = get(data, path);
  console.log('Get rule path:', path);
  console.log('Get rule value:', value);
  return value;
 }
 else if (isObject(rule)) {
  const operator = keys(rule)[0];
  const operands = rule[operator] as IRule[];
  console.log('Operator:', operator);
  console.log('Operands:', operands);

  if (operator in operators) {
   if (isArray(operands)) {
    const evaluatedOperands = map(operands, operand => evaluateRule(operators, operand, data, depth + 1));
    const result = operators[operator].apply(null, evaluatedOperands);
    console.log('↓', operator);
    console.log('Evaluated operator:', operator);
    console.log('Evaluated operands:', evaluatedOperands);
    console.log('Operator result:', result);
    console.log('↑', operator);
    return Boolean(result);
   }
   else {
    const result = operators[operator].apply(null, [operands]);
    console.log('Operator result:', result);
    return result;
   }
  }
  else {
   throw new Error(`Operator ${operator} is not supported.`);
  }
 }
 else {
  console.log('Returning rule as is:', rule);
  return rule;
 }
}
// 配列をフィルタリングする関数
function filterArray(rules: IRule, dataArray: unknown[], max: number): unknown[] {
 const operators = filterOperators;
 console.log('Filtering array with rules:', rules);
 if (!rules || (isObject(rules) && isEmpty(rules))) {
  return dataArray;
 }
 let count = 0;
 const result = filter(dataArray, (data) => {
  if (count > max) {
   return false;
  }
  const evaluteResult = evaluateRule(operators, rules, data);
  if (evaluteResult) {
   count++;
  }
  return evaluteResult;
 });
 return result;
}

// ソート関数
function sortArray(rules: Record<'asc' | 'desc', IRule>[], dataArray: unknown[]): unknown[] {
 const operators = aggregateOperators;
 console.log('Sorting array with rules:', rules);
 if (!rules || rules.length === 0) {
  return dataArray;
 }
 const iteratees = rules.map((rule) => {
  const order = keys(rule)[0] as 'asc' | 'desc';
  const ruleValue = rule[order];
  return {
   iteratee: (data: unknown) => evaluateRule(operators, ruleValue, data),
   order: order,
  };
 });
 const iterateeFunctions = iteratees.map(item => item.iteratee);
 const orders = iteratees.map(item => item.order);
 const result = orderBy(dataArray, iterateeFunctions, orders);
 console.log('Sorted array result:', result);
 return result;
}

function aggregateArray(rule: IRule, dataArray: unknown[]): unknown {
 const operators = aggregateOperators;
 console.log('Aggregating array with rule:', rule);
 if (!rule || (isObject(rule) && isEmpty(rule))) {
  return dataArray;
 }
 const operatorKey = keys(rule)[0];
 const operator = operators[operatorKey];
 if (!operator) {
  throw new Error(`Operator ${operatorKey} is not supported.`);
 }
 const agRule = get(rule, operatorKey);
 const values = map(dataArray, data => evaluateRule(operators, agRule[0], data));
 const result = operator(values);
 console.log('Aggregated result:', result);
 return result;
}

// ページング関数
function paginateArray(rule: IPaginate, dataArray: unknown[] | undefined): unknown[] | undefined {
 console.log('Paginating array with rule:', rule);
 if (!dataArray) {
  return dataArray;
 }
 if (!rule || (isObject(rule) && isEmpty(rule))) {
  return dataArray;
 }
 const pageSize = rule.size;
 const pageNumber = rule.page;

 if (typeof pageNumber === 'number' && typeof pageSize === 'number') {
  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;
  const result = slice(dataArray, start, end);
  // console.log('Paginated result:', result);
  return result;
 }
 else {
  throw new TypeError('Page parameters must be numbers.');
 }
}

// グループ化関数
function groupingArray<T>(rule: IRule, dataArray: T[]): Record<string, T[]> {
 const operators = filterOperators;
 console.log('Grouping array with rule:', rule);
 if (!rule || (isObject(rule) && isEmpty(rule))) {
  return { all: dataArray };
 }
 const result = groupBy(dataArray, (data) => {
  const groupKey = evaluateRule(operators, rule, data);
  if (typeof groupKey === 'boolean' || typeof groupKey === 'string' || typeof groupKey === 'number') {
   return groupKey;
  }
  throw new Error('Invalid group key. Expected a boolean, string, or number.');
 });
 console.log('Grouped result:', result);
 return result;
}

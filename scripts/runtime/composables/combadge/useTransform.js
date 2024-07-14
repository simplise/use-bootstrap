import { get, isArray, map, toPath } from "lodash-es";
export function useTransform(data, transform) {
  const path = toPath(transform);
  return transformer(data, path);
}
function transformer(data, path) {
  const property = path.shift();
  if (!property) {
    return data;
  }
  if (isArray(data)) {
    const mapped = map(data, property);
    return transformer(mapped, path);
  } else {
    const selected = get(data, property);
    return transformer(selected, path);
  }
}

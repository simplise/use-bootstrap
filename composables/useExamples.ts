
const examples = import.meta.glob<string>('@/components/examples/**/*.vue', { as: 'raw', eager: true })

export default function () {
 return examples;
}
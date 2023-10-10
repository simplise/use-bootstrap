


export default function (path: string) {
 const route = useRoute()
 const target = path || '/'
 const lang = route.params.lang || 'en'
 return `/lang-${lang}${target}`;
}
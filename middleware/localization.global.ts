import trim from 'lodash/trim'
export default defineNuxtRouteMiddleware((to) => {
 const router = useRouter();
 if (to.fullPath.startsWith('/lang-')) {
  return
 }
 else {
  const routes = router.getRoutes()
  if (!routes.some((item) => trim(item.path, '/') == trim(to.path, '/'))) {
   return navigateTo(`/lang-en${to.fullPath}`)
  }
  if (to.path.includes('/lang-')) {
   return abortNavigation()
  }
 }
})
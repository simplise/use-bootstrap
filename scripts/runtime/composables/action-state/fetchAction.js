export async function fetchAction(method, params, actionProp, status, data) {
  const response = await $fetch(actionProp.url, {
    method,
    body: params,
    retry: 10,
    retryDelay: 1e3,
    ignoreResponseError: true,
    async onResponse(context) {
      status.value = context.response?.status || 400;
    }
  });
  data.value = response;
}

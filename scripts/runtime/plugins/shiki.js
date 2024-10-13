import { createHighlighter } from "shiki";
import { defineNuxtPlugin } from "#imports";
export default defineNuxtPlugin(async (nuxtApp) => {
  const highlighter = await createHighlighter({
    themes: ["snazzy-light", "min-dark"],
    langs: ["vue", "shellscript", "scss"]
  });
  nuxtApp.provide("shiki", (code, options) => highlighter.codeToHtml(code, options));
});

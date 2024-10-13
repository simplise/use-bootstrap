import { createHighlighter, type BundledLanguage, type BundledTheme, type CodeToHastOptions } from 'shiki';
import { defineNuxtPlugin } from '#imports';


export default defineNuxtPlugin(async (nuxtApp) => {
 const highlighter = await createHighlighter({
  themes: ['snazzy-light', 'min-dark'],
  langs: ['vue', 'shellscript', 'scss'],
 });
 nuxtApp.provide('shiki', (code: string, options: CodeToHastOptions<BundledLanguage, BundledTheme>) => highlighter.codeToHtml(code, options));
});

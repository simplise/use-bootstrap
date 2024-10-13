import { createHighlighter } from "shiki";
export const getHighlighter = async () => {
  return await createHighlighter({
    themes: ["snazzy-light", "min-dark"],
    langs: ["vue", "shellscript", "scss"]
  });
};

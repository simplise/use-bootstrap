import { parseURL } from "ufo";
export function useCri(cri) {
  const parsed = parseURL(cri);
  const pathes = parsed.pathname.split("/");
  if (!pathes[0]) {
    pathes.shift();
  }
  const criType = pathes[0];
  switch (criType) {
    case "dsr":
    default: {
      return {
        database: Number(pathes[1]) || 0,
        schema: Number(pathes[2]) || 0,
        row: Number(pathes[3]) || 0,
        search: parsed.search,
        hash: parsed.hash
      };
    }
  }
}

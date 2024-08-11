import { matcherPwnedFactory } from "@zxcvbn-ts/matcher-pwned";
import { zxcvbnOptions } from "@zxcvbn-ts/core";
import * as zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
import * as zxcvbnEnPackage from "@zxcvbn-ts/language-en";
import { defineNuxtPlugin } from "#imports";
export default defineNuxtPlugin(() => {
  const matcherPwned = matcherPwnedFactory(fetch, zxcvbnOptions);
  zxcvbnOptions.addMatcher("pwned", matcherPwned);
  const options = {
    // recommended
    dictionary: {
      ...zxcvbnCommonPackage.dictionary,
      ...zxcvbnEnPackage.dictionary
    },
    // recommended
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
    // recommended
    useLevenshteinDistance: true,
    // optional
    translations: zxcvbnEnPackage.translations
  };
  zxcvbnOptions.setOptions(options);
});

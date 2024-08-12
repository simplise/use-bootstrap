import * as cheerio from "cheerio";
import { defineNitroPlugin } from "#imports";
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response, { _event }) => {
    const dom = cheerio.load(response.body);
    const target = dom("#__nuxt");
    response.body = target?.html();
  });
});

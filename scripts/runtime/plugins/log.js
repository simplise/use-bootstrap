import * as cheerio from "cheerio";
import { defineNitroPlugin } from "#imports";
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (html, { _event }) => {
    const dom = cheerio.load(html.body);
    console.log(dom("#content").prop("innerText"));
    console.log(nitroApp.options);
  });
});

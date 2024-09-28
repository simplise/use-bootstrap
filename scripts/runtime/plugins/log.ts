import * as cheerio from 'cheerio';
import { defineNitroPlugin } from '#imports'; // ビルドエラー、実行時エラー防止のため必要

export default defineNitroPlugin((nitroApp) => {
 nitroApp.hooks.hook('render:response', (html, { _event }) => {
  const dom = cheerio.load(html.body);
  console.log(dom('#bd-content').prop('innerText'));
  console.log(nitroApp.options);
  // const publicDir = path.join(nitroApp.options.rootDir, 'public');
  // const filePath = path.join(publicDir, 'savedPage.html');
  // console.log(filePath)
 });
});

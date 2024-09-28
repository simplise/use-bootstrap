// Fragment 生成
// Jsdomでエラー、cheerioに変更
// Generate、はうまくいかない？
// Doctype など外側のレンダリングはTitleが取得できない？

import * as cheerio from 'cheerio';
import { defineNitroPlugin } from '#imports'; // ビルドエラー、実行時エラー防止のため必要

export default defineNitroPlugin((nitroApp) => {
 nitroApp.hooks.hook('render:response', (response, { _event }) => {
  const dom = cheerio.load(response.body);
  const target = dom('#__nuxt');
  response.body = target?.html();
 });
});

// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Bootstrap demo</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
//   </head>
//   <body>
//     <h1>Hello, world!</h1>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
//   </body>
// </html>

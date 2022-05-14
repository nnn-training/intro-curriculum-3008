// Description:
//   TODO を管理できるボットです
// Commands:
//   ボット名 add      - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
'use strict';
const bolt = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();
const todo = require('todo');

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

app.message(/add (.+)/i, ({context, say}) => {
  const task = context.matches[1].trim();
  todo.add(task);
  say(`追加しました: ${task}`);
});

app.message(/done (.+)/i, ({context, say}) => {
  const task = context.matches[1].trim();
  todo.done(task);
  say(`完了にしました: ${task}`);
});
 
app.message(/del (.+)/i, ({context, say}) => {
  const task = context.matches[1].trim();
  todo.del(task);
  say(`削除しました: ${task}`);
});

app.message(/^list/i, ({context, say}) => {
  if (todo.list().join('\n') === "") {
    say('TODOはありません');
  } else {
    say(todo.list().join('\n'));
  };
});

app.message(/donelist/i, ({context, say}) => {
  if (todo.donelist().join('\n') === "") {
    say('完了したTODOはありません');
  } else {
    say(todo.donelist().join('\n'));
  }
});

app.start();

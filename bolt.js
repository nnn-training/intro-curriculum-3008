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
  const taskName = context.matches[1].trim();
  todo.add(taskName);
  say(`タスク追加ああああ！: ${taskName}`);
});

app.message(/done (.+)/i, ({context, say}) => {
  const taskName = context.matches[1].trim();
  todo.done(taskName);
  say(`タスク: ${taskName} 完了!!!!`);
});
 
app.message(/del (.+)/i, ({context, say}) => {
  const taskName = context.matches[1].trim();
  todo.del(taskName);
  say(`タスク削除!: ${taskName}`);
});

app.message(/^タスク/i, ({context, say}) => {
  if(todo.list().length < 1){say('タスク無し！');return;}
  say(todo.list().join('\n'));
});

app.message(/完了したタスク/i, ({context, say}) => {
  if(todo.list().length < 1){say('完了したタスク無し！');return;}
  say(todo.donelist().join('\n'));
});

app.start();
console.log('おおおおおおお！！！！！');
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
const todo = require('todo');

const app = new bolt.App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true//,
//    logLevel: 'debug'
});

app.message(/add (.+)/i, ({message, context, say}) => {
  const taskName = context.matches[1].trim();
  todo.add(taskName);
  say(`<@${message.user}>さん"${taskName}"を追加しました`);
});

app.message(/done (.+)/i, ({message, context, say}) => {
  const taskName = context.matches[1].trim();
  todo.done(taskName);
  say(`<@${message.user}>さん"${taskName}"を完了にしました`);
});

app.message(/del (.+)/i, ({message, context, say}) => {
  const taskName = context.matches[1].trim();
  todo.del(taskName);
  say(`<@${message.user}>さん"${taskName}"を削除しました`);
});

app.message(/^list/i, ({message, say}) => {
  const taskList = todo.list().join('\n');
  if (taskList === ''){
    say(`<@${message.user}>さんリストは空です`);
  }else{
    say(`<@${message.user}>さんリストは\n${taskList}`);
  }
});

app.message(/^donelist/i, ({message, say}) => {
  const donelist = todo.donelist().join('\n')
  if (donelist === ''){
    say(`<@${message.user}>さん完了リストは空です`);
  }else{
    say(`<@${message.user}>さん完了リストは\n${donelist}`);
  }
});

app.message('おみくじ', ({message, say}) => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    say(`<@${message.user}>さん${lot}です`);
});

app.start();
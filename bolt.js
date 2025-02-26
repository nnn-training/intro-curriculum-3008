// Description:
//   TODO を管理できるボットです
// Commands:
//   ボット名 add  ${タスク名} - TODO を作成
//   ボット名 done ${タスク名} - TODO を完了にする
//   ボット名 del  ${タスク名} - TODO を消す
//   ボット名 list            - TODO の一覧表示
//   ボット名 donelist        - 完了した TODO の一覧表示

'use strict';
const bolt = require('@slack/bolt')
const todo = require('todo')

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

// タスクの追加
app.message(/add (.+)/i, ({context, say}) => {
  const taskName = context.matches[1].trim()
  todo.add(taskName) // タスクの作成
  say(`追加しました:${taskName}`)
})

// タスクの完了
app.message(/done (.+)/i, ({context, say}) => {
  const taskName = context.matches[1].trim()
  todo.done(taskName) // タスクを完了にする
  say(`完了にしました:${taskName}`)
})

// タスクの削除
app.message(/del (.+)/i, ({context, say}) => {
  const taskName = context.matches[1].trim()
  todo.del(taskName) // タスクを完了にする
  say(`削除しました:${taskName}`)
})

// 未完了のタスクの一覧表示
app.message(/^list/i, ({context, say}) => {
  const tasks = todo.list();
  if (tasks.length === 0) {
    say('（TODO はありません）')
  } else {
    say(todo.list().join('\n'))
  }
})

// 完了したタスクの一覧表示
app.message(/donelist/i, ({context, say}) => {
  const tasks = todo.donelist();
  if (tasks.length === 0) {
    say('（完了した TODO はありません）')
  } else {
    say(todo.donelist().join('\n'))
  }
})

app.start(); // ボットの起動！
// Description:
//   TODO を管理できるボットです
// Commands:
//   ボット名 add      - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
'use strict';
const todo = require('todo');
module.exports = robot => {
  robot.respond(/add (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.add(task);
    msg.send('追加しました: ' + task);
  });
  robot.respond(/done (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send('完了にしました: ' + task);
  });
  robot.respond(/del (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send('削除しました: ' + task);
  });
  robot.respond(/list/i, msg => {
    const list = todo.list();
    if (list.length === 0) {
      msg.send('(TODOはありません)');
    } else {
      msg.send(list.join('\n'));
    }
  });
  robot.respond(/donelist/i, msg => {
    const donelist = todo.donelist();
    if (donelist.length === 0) {
      msg.send('(完了したTODOはありません)');
    } else {
      msg.send(donelist.join('\n'));
    }
  });
};
scripts/todo.js
list コマンドの実装例で説明すると、一度配列を取得して list という変数に受け取り、 if 文を使って処理を分岐させ異なるメッセージを送信するようにします。

robot.respond(/list/i, msg => {
  const list = todo.list();
  if (list.length === 0) {
    msg.send('(TODOはありません)');
  } else {
    msg.send(list.join('\n'));
  }
});
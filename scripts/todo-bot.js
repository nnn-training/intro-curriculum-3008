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
    msg.send(`「${task}」を追加したよ`);
  });
  robot.respond(/done (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send(`「${task}」を完了！`);
  });
  robot.respond(/del (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send(`「${task}」を消したよ`);
  });
  robot.respond(/list/i, msg => {
    const list = todo.list();
    if (list.length === 0){
      msg.send('(タスクが一つもないよ)')
    }　else {
      msg.send(todo.list().join('\n'));
    }
  });
  robot.respond(/donelist/i, msg => {
    const donelist = todo.donelist();
    if (donelist.length === 0){
      msg.send('(まだタスクを完了していないよ)')
    }　else {
      msg.send(todo.donelist().join('\n'));
    }
  });
};

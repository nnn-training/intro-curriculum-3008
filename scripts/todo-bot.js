// Description:
//   TODO を管理できるボットです
// Commands:
//   kei-hubot-study add      - TODO を作成
//   kei-hubot-study done     - TODO を完了にする
//   kei-hubot-study del      - TODO を消す
//   kei-hubot-study list     - TODO の一覧表示
//   kei-hubot-study donelist - 完了した TODO の一覧表示
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
      msg.send('TODOはありません');
    } else {
      msg.send(todo.list().join('\n'));
    }
  });
  robot.respond(/donelist/i, msg => {
    const donelist = todo.donelist();
    if (donelist.length === 0) {
      msg.send('完了したTODOは  ありません');
    } else {
      msg.send(todo.donelist().join('\n'));
    }
  });
};

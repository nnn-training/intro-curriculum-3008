'use strict';
// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const tasks = [];

/**
 * タスクを追加する
 * @param {string} task
 */
function add(task) {
  tasks.push({ name: task, state: false });
}

/**
* タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了したかを返す
* @param {object} taskAndIsDonePair
* @return {boolean} 完了したかどうか
*/
function isDone(taskAndIsDonePair) {
  return taskAndIsDonePair.state;
}

/**
* タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了していないかを返す
* @param {object} taskAndIsDonePair
* @return {boolean} 完了していないかどうか
*/
function isNotDone(taskAndIsDonePair) {
  return !isDone(taskAndIsDonePair);
}

/**
 * タスクの一覧の配列を取得する
 * @return {array}
 */
function list() {
  return tasks
    .filter(isNotDone)
    .map(t => t.name);
}

/**
 * タスクを完了状態にする
 * @param {string} task
 */
function done(task) {
  const indexFound = tasks.findIndex(t => t.name === task);
  if (indexFound !== -1) {
    tasks[indexFound].state = true;
  }
}

/**
 * 完了済みのタスクの一覧の配列を取得する
 * @return {array}
 */
function donelist() {
  return tasks
    .filter(isDone)
    .map(t => t.name);
}

/**
 * 項目を削除する
 * @param {string} task
 */
function del(task) {
  const indexFound = tasks.findIndex(t => t.name === task);
  if (indexFound !== -1) {
    tasks.splice(indexFound, 1);
  }
}

module.exports = {
  add,
  list,
  done,
  donelist,
  del
};

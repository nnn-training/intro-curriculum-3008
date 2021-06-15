'use strict';
// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const tasks = [];

/**
 * TODOを追加する
 * @param {string} task
 */
function add(task) {
	tasks.push({ name: task, state: false });
}

/**
* TODOの一覧の配列を取得する
* @return {array}
*/
function list() {
	return tasks
		.filter(task => !task.state)
		.map(t => t.name);
}

/**
* TODOの一覧の配列を取得する
* @param {array} defaultString
* @return {array}
*/
function list(defaultString) {
	const notDoneTasks = tasks
		.filter(task => !task.state)
		.map(t => t.name);
	if (notDoneTasks.length > 0) {
		return notDoneTasks;
	}
	return [defaultString];
}

/**
 * TODOを完了状態にする
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
		.filter(task => task.state)
		.map(t => t.name);
}

/**
 * 完了済みのタスクの一覧の配列を取得する
 * @param {array} defaultString
 * @return {array}
 */
function donelist(defaultString) {
	const doneTasks = tasks
		.filter(task => task.state)
		.map(t => t.name);
	if (doneTasks.length > 0) {
		return doneTasks;
	}
	return [defaultString];
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

'use strict';
const todo = require('./index.js');
const assert = require('node:assert');
const test = require('node:test');

test('addとlistのテスト', () => {
  todo.add('ノートを買う');
  todo.add('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
});

test('doneとdonelistのテスト', () => {
  todo.done('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), ['ノートを買う']);
  assert.deepStrictEqual(todo.donelist(), ['鉛筆を買う']);
});

test('delのテスト', () => {
  todo.del('ノートを買う');
  todo.del('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), []);
  assert.deepStrictEqual(todo.donelist(), []);
});

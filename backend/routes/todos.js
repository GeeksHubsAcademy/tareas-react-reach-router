var express = require('express');
var router = express.Router();

const fs = require('fs');

function getData() {
  return JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
}
function generateId() {
  return `${Date.now()}-${Math.random()}`;
}
function setData(data) {
  fs.writeFileSync('./db.json', JSON.stringify(data), 'utf-8');
}

router.get('/', function(req, res, next) {
  const db = getData();
  res.status(200).json({ todos: db.todos });
});

router.post('/', function(req, res, next) {
  const db = getData();
  const todo = req.body;
  todo.id = generateId();
  db.todos.unshift(todo);
  setData(db);
  res.status(201).json({ todos: db.todos });
});

router.put('/', function(req, res, next) {
  const db = getData();
  const todo = req.body;
  const todoExist = db.todos.find(_todo => _todo.id === todo.id);
  if (!todoExist) return res.status(400).json({ message: 'no id found' });

  db.todos = db.todos.map(_todo => (_todo.id === todo.id ? todo : _todo));
  setData(db);
  res.status(200).json({ todos: db.todos });
});

router.delete('/:id', function(req, res, next) {
  const db = getData();
  const id = req.params.id;
  const todoExist = db.todos.find(_todo => _todo.id === id);
  if (!todoExist) return res.status(400).json({ message: 'no id found' });

  db.todos = db.todos.filter(todo => todo.id !== id);
  setData(db);
  res.status(200).json({ todos: db.todos });
});

module.exports = router;

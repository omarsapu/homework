"use strict";
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const createTodoElement = (text, id) => {
  const todo = document.createElement(`li`);
  todo.classList.add("todo");
  const textElement = document.createElement("div");
  const actions = document.createElement("div");
  actions.classList.add("todo-actions");

  const complete = document.createElement("button");
  complete.classList.add("button-complete", "button");
  complete.innerHTML = "&#10004;";


  const deleted = document.createElement("button");
  deleted.classList.add("button-delete", "button");
  deleted.innerHTML = "&#10006;";

 

  textElement.textContent = text;

  actions.append(complete, deleted);
  todo.append(textElement, actions);

  return todo;
};

const todoKeys = {
  id: "id",
  text: "text",
  isCompleted: "isCompleted",
};
const todos = [];

const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.isCompleted]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

const handleCreateTodo = (todos, text) => {
  const newTodo = createTodo(todos, text);
  const todoElement = createTodoElement(text, newTodo.id);
  const buttonCompleted = todoElement.querySelector(".button-complete");
  const buttonDelete = todoElement.querySelector(".button-delete");
  todosElement.append(todoElement);

  buttonCompleted.addEventListener("click", function () {
    const todoCompleted = completeTodoById(todos, newTodo.id);
    todoElement.classList.toggle("completed", todoCompleted.isCompleted);
  });

  buttonDelete.addEventListener("click", function () {
    deleteTodoById(todos, newTodo.id);
    todoElement.remove();
  });
  input.value = "";
};

const createDefaultTodo = () => {
  handleCreateTodo(todos, "Задача 1");
};

createDefaultTodo();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  handleCreateTodo(todos, input.value);
});

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

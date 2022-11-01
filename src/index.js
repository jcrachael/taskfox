// This is the script that will load when the user opens the app page.

import './style.css';
import { DisplayController } from './DisplayController';
import {createProject } from './Project';
import { createTodo } from './Todo';
const {format} = require('date-fns');

// ON APP OPENING:


// Generate a new defaultProject object
const defaultProjectTitle = 'My First Project';
const defaultProjectDescription = 'My first project description goes here.';
const defaultProject = createProject(defaultProjectTitle, defaultProjectDescription);

// Generate new defaultTodo object
const defaultTodoTitle = 'My First Task';
const defaultTodoPriority = 'normal'
const defaultTodoDescription = 'My first task description!';
const defaultTodoDueDate = format(new Date(2023, 12, 31), 'dd.MM.yyyy');
const defaultTodoProject = defaultProject.title;

const defaultTodo = createTodo(defaultTodoTitle, defaultTodoDescription, defaultTodoDueDate, defaultTodoProject, defaultTodoPriority);

const newTodoTitle = 'My second task';
const newTodoDescription = 'Another task description goes here.';
const newTodoPriority = 'urgent';
const newTodoDueDate = format(new Date(2023, 1, 6), 'dd.MM.yyyy');
const newTodoProject = defaultProject.title;
const newTestTodo = createTodo(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoProject, newTodoPriority);

defaultProject.addTask(defaultTodo);
defaultProject.addTask(newTestTodo);

// Build the default template
let displayController = new DisplayController();
displayController.homepage();




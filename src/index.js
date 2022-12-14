// This is the script that will load when the user opens the app page.

import './style.css';
import { DisplayController } from './DisplayController';
import {createProject } from './Project';
import { createTodo } from './Todo';


// ON APP OPENING:


// Generate a new defaultProject object
const defaultProjectTitle = 'My First Project';
const defaultProjectDescription = 'My first project description goes here.';
const defaultProjectDueDate = new Date(2023, 5, 1).toLocaleDateString('en-AU');
const defaultProject = createProject(defaultProjectTitle, defaultProjectDescription, defaultProjectDueDate);

// Generate new defaultTodo object
const defaultTodoTitle = 'My First Task';
const defaultTodoPriority = 'normal'
const defaultTodoDescription = 'My first task description!';
const defaultTodoDueDate = new Date(2023, 12, 30).toLocaleDateString();
const defaultTodoProject = defaultProject.title;

const defaultTodo = createTodo(defaultTodoTitle, defaultTodoDescription, defaultTodoDueDate, defaultTodoProject, defaultTodoPriority);

const newTodoTitle = 'My second task';
const newTodoDescription = 'Another task description goes here.';
const newTodoPriority = 'urgent';
const newTodoDueDate = new Date(2023, 1, 6).toLocaleDateString('en-AU');
const newTodoProject = defaultProject.title;
const newTestTodo = createTodo(newTodoTitle, newTodoDescription, newTodoDueDate, newTodoProject, newTodoPriority);

defaultProject.addTask(defaultTodo);
defaultProject.addTask(newTestTodo);

// Build the default template
let displayController = new DisplayController();
displayController.homepage();




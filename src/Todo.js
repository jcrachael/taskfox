// This is the Todo object and related functions, which will store each 'task' a.k.a. Todo item

import { Project, projectsList } from "./Project";

const todoList = [];

class Todo {
    constructor(title, description, dueDate, project, priority) {
        this.title = title;
        this.created = new Date().toLocaleDateString('en-AU');
        this.dueDate = dueDate;
        this.description = description;
        this.project = project;
        this.priority = priority;
        this.initialPriority = priority;
        this.overdue = false;
        this.complete = false;
    }

    updateProject(project) {
        this.project = project.title;
        return
    }

    

    toggleCompleteStatus() {
        if (this.complete == false) {
            this.complete = true;
            this.priority = 'complete';
            return 
        } else if (this.complete == true) {
            this.complete = false;
            this.priority = this.initialPriority;
            return 
        }
    }

    getInfo() {
        return [this.title, this.created, this.dueDate, this.description, this.project, this.priority, this.overdue, this.complete];
    }
}


function createTodo(title, description, dueDate, project, priority) {
    
    const newTodo = new Todo(title, description, dueDate, project, priority);
    todoList.push(newTodo);

    return newTodo;
}

function deleteTodo(Todo) {

    // remove task from todoList
    const index = todoList.indexOf(Todo);
    if (index > -1) {
        todoList.splice(index, 1)
    }

    // remove task from its Project.todos
    // get the project title
    const thisTaskProjectTitle = Todo.project;
    let thisTaskProject = undefined;
    // find the corresponding project in the projectList
    for (let i = 0; i < projectsList.length; i++) {
        if (thisTaskProjectTitle == projectsList[i]['title']) {
            thisTaskProject = projectsList[i];
        }
    };
    // get the index of this task in it's Project's todos
    const todoIndex = thisTaskProject['todos'].indexOf(Todo);
    // remove this task from the Project's todos
    thisTaskProject['todos'].splice(todoIndex, 1);

    // delete task
    Todo = null;
    return
}

function editTodo(todo, newValues) {
    
    // remove task from old project list
    for (let i = 0; i < projectsList.length; i++) {
        if (projectsList[i]['title'] == todo.projectTitle);
        projectsList[i].removeTask(todo);
    }
    
    // check which values are included in the object
    if (newValues.title) { todo.title = newValues.title; };
    if (newValues.dueDate) { todo.dueDate = newValues.dueDate};
    if (newValues.description) { todo.description = newValues.description};
    if (newValues.projectTitle) {todo.project = newValues.projectTitle};
    if (newValues.priority) {todo.priority = newValues.priority; todo.initialPriority = newValues.priority};
    
    // add task to correct new project list
    for (let i = 0; i < projectsList.length; i++) {
        if (projectsList[i]['title'] == todo.project) {
            projectsList[i].addTask(todo);
        }
    };

    return todo
}

function displayTodos() {
    let taskList = [];
    for (let i = 0; i < todoList.length; i++) {
        let info = todoList[i].getInfo();
        taskList.push(info);
    }
    return taskList;
};

function getNumTodos() {
    return todoList.length;
}



export {Todo, todoList, createTodo, editTodo, deleteTodo, displayTodos, getNumTodos}


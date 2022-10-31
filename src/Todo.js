const {format} = require('date-fns');

const todoList = [];

class Todo {
    constructor(title, description, dueDate, project, priority) {
        this.title = title;
        this.created = format(new Date(), 'dd.MM.yyyy');
        this.dueDate = dueDate;
        this.description = description;
        this.project = project;
        this.priority = priority;
        this.overdue = false;
        this.complete = false;
    }

    toggleCompleteStatus() {
        if (this.complete == false) {
            this.complete = true;
            return 
        } else if (this.complete == true) {
            this.complete = false;
            return 
        }
    }
}


function createTodo(title, description, dueDate, project, priority) {
    const newTodo = new Todo(title, description, dueDate, project, priority);
    todoList.push(newTodo);
    return newTodo;
}


function displayTodos() {
    for (let i = 0; i < todoList.length; i++) {
        return todoList[i]['title'];
    }
};

function getNumTodos() {
    return todoList.length;
}



export {Todo, todoList, createTodo, displayTodos, getNumTodos}


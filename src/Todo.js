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
        this.initialPriority = priority;
        this.overdue = false;
        this.complete = false;
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



export {Todo, todoList, createTodo, displayTodos, getNumTodos}


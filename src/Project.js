const {format} = require('date-fns');

const projectsList = [];

class Project {
    constructor(title, description) {
        this.title = title;
        this.created = format(new Date(), 'dd.MM.yyyy');
        this.description = description;
        this.todos = [];
        this.complete = false;
    }

    addTask(task) {
        this.todos.push(task);
        return this.todos;
    }

    getNumTodosInProject() {
        return this.todos.length;
    }
}

function createProject(title, description) {
    const newProject = new Project(title, description);
    projectsList.push(newProject);
    return newProject;
}


function displayProjects() {
    for (let i = 0; i < projectsList.length; i++) {
        return projectsList[i]['title'];
    }
};

function getNumProjects() {
    return projectsList.length;
}




export { createProject, displayProjects, getNumProjects, projectsList}




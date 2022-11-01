// This is the Projects object (and related functions) which will store Projects

const projectsList = [];

class Project {
    constructor(title, description, dueDate) {
        this.title = title;
        this.created = new Date().toLocaleDateString('en-AU');
        this.dueDate = dueDate;
        this.description = description;
        this.todos = [];
        this.complete = false;
    }

    addTask(task) {
        this.todos.push(task);
        return this.todos;
    }

    removeTask(task) {
        this.todos.pop(task);
        return this.todos;
    }

    getNumTodosInProject() {
        return this.todos.length;
    }
}

function createProject(title, description, dueDate) {
    const newProject = new Project(title, description, dueDate);
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




export { Project, createProject, displayProjects, getNumProjects, projectsList}




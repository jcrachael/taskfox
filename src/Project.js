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



    getNumTodosInProject() {
        return this.todos.length;
    }
}

function createProject(title, description, dueDate) {
    dueDate = dueDate;
    const newProject = new Project(title, description, dueDate);
    projectsList.push(newProject);
    return newProject;
}

function deleteProject(Project) {
    
    // For each todo in this project's todo list
    for (let i = 0; i < Project.todos.length; i++) {
        let todo = Project.todos[i];
        // remove this Project from todo.project
        todo.project = '';
    };
    // remove project from project list
    const index = projectsList.indexOf(Project);
    if (index > -1) {
        projectsList.splice(index, 1);
    };
    // delete this project
    Project = null;
}


function displayProjects() {
    return projectsList
};

function getNumProjects() {
    return projectsList.length;
}




export { Project, createProject, deleteProject, displayProjects, getNumProjects, projectsList}




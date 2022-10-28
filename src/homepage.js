import './style.css';
import redLogo from './assets/logo-red-512px.svg';
import plus from './assets/plus.png'
import plusFilled from './assets/plus-filled.png'
import dash from './assets/dashboards.png'
import task from './assets/task.png'
import idea from './assets/idea.png'

// Building the Template

function homepage(){
    // header logo
    const logo = document.getElementById('logo');
    logo.src = redLogo;

    // new task / new project buttons
    const newProjectIcon = document.getElementById('new-project-icon');
    newProjectIcon.src = plus;

    const newProjectLink = document.getElementById('new-project-link');

    newProjectLink.addEventListener('mouseover', function() {
        newProjectIcon.src = plusFilled;
    });

    newProjectLink.addEventListener('mouseleave', function() {
        newProjectIcon.src = plus;
    })

    const newTaskIcon = document.getElementById('new-task-icon');
    newTaskIcon.src = plus;

    const newTaskLink = document.getElementById('new-task-link');

    newTaskLink.addEventListener('mouseover', function() {
        newTaskIcon.src = plusFilled;
    });

    newTaskLink.addEventListener('mouseleave', function() {
        newTaskIcon.src = plus;
    })

    // sidebar nav icons
    const dashIcon = document.getElementById('dashboard-link-icon');
    dashIcon.setAttribute('src', dash);

    const taskIcon = document.getElementById('tasks-link-icon');
    taskIcon.setAttribute('src', task);

    const projectsIcon = document.getElementById('projects-link-icon');
    projectsIcon.setAttribute('src', idea);

    // sidebar link event listeners
    const dashLink = document.getElementById('nav-dash');
    const projectsLink = document.getElementById('nav-projects');
    const tasksLink = document.getElementById('nav-tasks');

    // Dashboard 
    dashLink.addEventListener('click', function() {
        // display dashboard

        // add nav-active class
        if (!dashLink.classList.contains('nav-active')) {
            dashLink.classList.add('nav-active');
        };

        // remove 'nav-active' from projectsLink
        if (projectsLink.classList.contains('nav-active')) {
            projectsLink.classList.remove('nav-active');
        };

        // remove 'nav-active' from tasksLink
        if (tasksLink.classList.contains('nav-active')) {
            tasksLink.classList.remove('nav-active');
        };
    });

    // Projects
    projectsLink.addEventListener('click', function() {
        // display projects

        // add nav-active class
        if (!projectsLink.classList.contains('nav-active')) {
            projectsLink.classList.add('nav-active');
        };

        // remove 'nav-active' from dashboardLink
        if (dashLink.classList.contains('nav-active')) {
            dashLink.classList.remove('nav-active');
        };

        // remove 'nav-active' from tasksLink
        if (tasksLink.classList.contains('nav-active')) {
            tasksLink.classList.remove('nav-active');
        };
    });

    // Tasks
    tasksLink.addEventListener('click', function() {
        // display projects

        // add nav-active class
        if (!tasksLink.classList.contains('nav-active')) {
            tasksLink.classList.add('nav-active');
        };

        // remove 'nav-active' from projectsLink
        if (projectsLink.classList.contains('nav-active')) {
            projectsLink.classList.remove('nav-active');
        };

        // remove 'nav-active' from dashLink
        if (dashLink.classList.contains('nav-active')) {
            dashLink.classList.remove('nav-active');
        };
    });    





};

export default homepage;


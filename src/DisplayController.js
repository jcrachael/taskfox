// This is the DisplayController object that stores the UI functions.

// CSS and image imports
import './style.css';
import redLogo from './assets/logo-red-512px.svg';
import plus from './assets/plus.png';
import plusFilled from './assets/plus-filled.png';
import dash from './assets/dashboards.png';
import task from './assets/task.png';
import idea from './assets/idea.png';
import check from './assets/check.png';
import checkFilled from './assets/check-active.png';
import cancel from './assets/cancel.png';
import cancelFilled from './assets/cancel-filled.png';

// JS module imports
import { todoList, createTodo, displayTodos } from "./Todo";
import { createProject, getNumProjects } from './Project';
import { getNumTodos } from './Todo';
import { projectsList } from "./Project";
import { format, toDate } from 'date-fns';


class DisplayController {
    constructor(){};

    // Show tasks tab
    static showTasksTab() {
        // reset content
        const content = document.getElementById('content');
        content.innerHTML = '';
                
        // add header
        const header = document.getElementById('header');
        header.innerText = 'Tasks';

        // display card
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', 'tasks-tab-card');
        content.appendChild(card);

        // add table to card
        const table = document.createElement('table');
        card.appendChild(table);
        // header row
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        table.appendChild(thead);
        table.appendChild(tbody);
        let tr = document.createElement('tr');
        thead.appendChild(tr);
        let th1 = document.createElement('th');
        tr.appendChild(th1);
        let th2 = document.createElement('th');
        th2.innerText = 'Task';
        tr.appendChild(th2);
        let th3 = document.createElement('th');
        th3.innerText = 'Due date';
        tr.appendChild(th3);
        let th4 = document.createElement('th');
        th4.innerText = 'Project';
        tr.appendChild(th4);
        let th5 = document.createElement('th');
        th5.innerText = 'Priority';
        tr.appendChild(th5);

        // get all tasks
        let arrayOfTodos = displayTodos();
        for (let i = 0; i < arrayOfTodos.length; i++) {
            // make a table row
            let todoRow = document.createElement('tr');
            todoRow.classList.add('todo-row');
            todoRow.classList.add(todoList[i]['priority']);
            todoRow.setAttribute('id', 'todo-row-' + i);
            tbody.appendChild(todoRow);
            // make the th for the checkbox
            let todoDataCheck = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');

            checkbox.classList.add('checkbox-pad');
            checkbox.setAttribute('id', todoList[i]['title'] + '-checkbox')
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('name', 'completed')


            todoDataCheck.appendChild(checkbox);
            todoRow.appendChild(todoDataCheck);
            // make the title th
            let todoTitle = document.createElement('td');
            todoTitle.classList.add('todo-title');
            todoTitle.innerText = arrayOfTodos[i][0];
            todoRow.appendChild(todoTitle);
            // make the due date th
            let todoDueDate = document.createElement('td');
            todoDueDate.innerText = arrayOfTodos[i][2];
            todoRow.appendChild(todoDueDate);
            // make the project th
            let todoProject = document.createElement('td');
            todoProject.innerText = arrayOfTodos[i][4];
            todoRow.appendChild(todoProject);
            // make the priority th
            let todoPriority = document.createElement('td');
            todoPriority.classList.add('priority-td');
            let prioritySpan = document.createElement('div');
            let priority = arrayOfTodos[i][5];
            prioritySpan.classList.add('task-urgency');
            prioritySpan.classList.add(priority);
            prioritySpan.innerText = priority;
            todoPriority.appendChild(prioritySpan);
            todoRow.appendChild(todoPriority);

            if (todoRow.classList.contains('complete')) {
                checkbox.checked = true;
            }

            checkbox.addEventListener('click', function() {
           
                // toggle complete status of this todo
                todoList[i].toggleCompleteStatus();
                prioritySpan.innerText = todoList[i]['priority'];
                if (todoList[i]['complete'] === true) {
                    prioritySpan.classList.add('complete');
                    todoRow.classList.add('complete');
                } else if (todoList[i]['complete'] === false) {
                    prioritySpan.classList.remove('complete');
                    todoRow.classList.remove('complete');

                    prioritySpan.classList.add(todoList[i]['priority']);
            


                    prioritySpan.innerText = todoList[i]['initialPriority'];
                };

            });
        };
 
    };

    static showProjectsTab() {
        // reset content
        const content = document.getElementById('content');
        content.innerHTML = '';
        // add header
        const header = document.getElementById('header');
        header.innerText = 'Projects';
    };   

    // Show new task modal
    static showNewTaskModal() {
        const newTaskModal = document.getElementById('new-task-modal');
        newTaskModal.classList.remove('modal-hidden');
        // set Cancel button event listener
        const cancelButton = document.getElementById('cancel-task-btn');
        cancelButton.addEventListener('click', function() {
            newTaskModal.classList.add('modal-hidden');
        })
        const dueDateInput = document.getElementById('new-task-due-date');
        let dateMin = new Date().toLocaleDateString('en-ca');
        dueDateInput.setAttribute('min', dateMin);
        // populate select options
        const selections = document.getElementById('project-select');
        selections.innerHTML = '';
        for (let i in projectsList) {
            let thisProject = projectsList[i]['title'];
            let optionEl = document.createElement('option');
            optionEl.setAttribute('value', thisProject);
            optionEl.innerText = thisProject;
            selections.appendChild(optionEl);
        }

        // SAVE TASK BUTTON
        // save task onclick event
        const saveTask = document.getElementById('submit-task-btn');
        const form = document.getElementById('new-task-form');

        saveTask.addEventListener('click', function(e) {
            // Prevent default event
            e.preventDefault();
            // check validity
            let isValid = form.reportValidity();

            // if form is valid, save the new task
            if (isValid) {
                let taskInfo = {};
                let title = document.getElementById('new-task-title').value;
                let dueDate = document.getElementById('new-task-due-date').value;
                
                let description = document.getElementById('new-task-description').value;
                let projectTitle;
                let priority;
                let urgentRadio = document.getElementById('urgent');
                let normalRadio = document.getElementById('noturgent');
                if (urgentRadio.checked) {
                    priority = 'urgent';
                } else if (normalRadio.checked) {
                    priority = 'normal';
                };
                let projectSelect = document.getElementById('project-select');
                let projectOptions = projectSelect.children;
                for (let i = 0; i < projectOptions.length; i++) {
                    if (projectOptions[i].selected) {
                        projectTitle = projectOptions[i].value
                    }
                };
                taskInfo.title = title;
                taskInfo.dueDate = dueDate;
                taskInfo.description = description;
                taskInfo.projectTitle = projectTitle;
                taskInfo.priority = priority;
                let newTask = createTodo(taskInfo.title, taskInfo.description, taskInfo.dueDate, taskInfo.projectTitle, taskInfo.priority);
                // add to the right project list
                for (let i = 0; i < projectsList.length; i++) {
                    if (projectsList[i]['title'] == taskInfo.projectTitle) {
                        projectsList[i].addTask(newTask);
                    }
                };
                // reset form and refresh dashboard
                form.reset();
                DisplayController.dashboard();
                newTaskModal.classList.add('modal-hidden');
            };
        });
    };

    static showNewProjectModal() {
        const newProjectModal = document.getElementById('new-project-modal');
        newProjectModal.classList.remove('modal-hidden');
        const cancelButton = document.getElementById('cancel-project-btn');
        cancelButton.addEventListener('click', function() {
            newProjectModal.classList.add('modal-hidden');
        });
        const dueDateInput = document.getElementById('new-project-due-date');
        let dateMin = new Date().toLocaleDateString('en-ca');
        dueDateInput.setAttribute('min', dateMin);
        const form = document.getElementById('new-project-form');
        // SAVE PROJECT BUTTON
        const saveProject = document.getElementById('submit-project-btn');
        // save project onclick event
        saveProject.addEventListener('click', function(e) {
            // prevent default event and check validity
            e.preventDefault();
            let isValid = form.reportValidity();
            // If the form is valid, save the project as a new project
            if (isValid) {
                // Save the project
                let projectInfo = {};
                let title = document.getElementById('new-project-title').value;
                let dueDate = document.getElementById('new-project-due-date').value;
                let description = document.getElementById('new-project-description').value;
                projectInfo.title = title;
                projectInfo.dueDate = dueDate;
                projectInfo.description = description;
                let newProject = createProject(projectInfo.title, projectInfo.dueDate, projectInfo.description);
                // reset form and refresh dashboard
                form.reset();
                DisplayController.dashboard();
                newProjectModal.classList.add('modal-hidden');
            };
        });
    };


    // Display tasks to dashboard
    static displayTaskstoDash() {
        let oldlist = document.querySelectorAll('.task-list-div');
        oldlist.forEach(item => { item.remove()});

        // display tasks
        for (let i = todoList.length - 1; i >= 0; i--) {
            const todoListDiv = document.createElement('div');
            todoListDiv.classList.add('task-list-div');

            // task priority
            if (todoList[i]['priority'] == 'urgent') {
                todoListDiv.classList.add('urgent');
            } else {
                todoListDiv.classList.add('normal');
            }

            // task title container
            const todoListDivTitleContainer = document.createElement('span');
            todoListDivTitleContainer.classList.add('task-list-div-title-container');
            todoListDiv.appendChild(todoListDivTitleContainer);

            const completeChecker = document.createElement('input');
            completeChecker.classList.add('checkbox-pad');
            completeChecker.setAttribute('id', todoList[i]['title'] + '-checkbox')
            completeChecker.setAttribute('type', 'checkbox');
            completeChecker.setAttribute('name', 'completed')
            todoListDivTitleContainer.appendChild(completeChecker);

            // task title
            const todoListDivTitle = document.createElement('p');
            todoListDivTitle.classList.add('task-list-div-title');
            todoListDivTitle.innerText = todoList[i]['title'];
            todoListDivTitleContainer.appendChild(todoListDivTitle);

            // task project
            const todoListDivProject = document.createElement('p');
            todoListDivProject.classList.add('task-project-subtitle');
            todoListDivProject.innerText = todoList[i]['project'];
            todoListDivTitleContainer.appendChild(todoListDivProject);

            // task urgency status
            const todoUrgency = document.createElement('span');
            todoUrgency.classList.add('task-urgency');
            const thisTaskUrgency = todoList[i]['priority'];
            todoUrgency.classList.add(thisTaskUrgency);
            todoUrgency.innerText = thisTaskUrgency;
    
            todoListDiv.appendChild(todoUrgency);

            recentTasksCard.appendChild(todoListDiv);
            todoListDiv.classList.add(todoList[i]['priority']);

            if (todoListDiv.classList.contains('complete')) {
                completeChecker.checked = true;
            }
           
            completeChecker.addEventListener('click', function() {
                todoList[i].toggleCompleteStatus();
                if (todoList[i]['complete'] === true) {
                    todoUrgency.innerText = 'Complete';
                    todoUrgency.classList.add('complete');
                    todoListDiv.classList.add('complete');
                } else if (todoList[i]['complete'] === false) {
                    todoListDiv.classList.remove('complete');
                    todoUrgency.classList.remove('complete');
                    todoUrgency.classList.add(todoList[i]['priority']);
                    todoUrgency.innerText = todoList[i]['initialPriority'];
                };
            });
        };
    };

    // Set nav links to active
    static setProjectsNavActive() {
        const dashLink = document.getElementById('nav-dash');
        const projectsLink = document.getElementById('nav-projects');
        const tasksLink = document.getElementById('nav-tasks');
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
    };

    static setDashboardNavActive() {
        const dashLink = document.getElementById('nav-dash');
        const projectsLink = document.getElementById('nav-projects');
        const tasksLink = document.getElementById('nav-tasks');
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
    };

    static setTasksNavActive() {
        const dashLink = document.getElementById('nav-dash');
        const projectsLink = document.getElementById('nav-projects');
        const tasksLink = document.getElementById('nav-tasks');
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
    };

    // Display projects to the dashboard
    static displayProjectsToDash() {
        const recentProjectsCard = document.getElementById('recentProjectsCard');
        // display projects
        let oldlist = document.querySelectorAll('.project-card-list');
        oldlist.forEach(item => { item.remove()});
        for (let i = projectsList.length - 1; i >= 0; i--) {
            const projectListDiv = document.createElement('div');
            projectListDiv.classList.add('project-card-list');
            const projectListDivTitle = document.createElement('p');
            projectListDivTitle.classList.add('project-card-list-title');
            projectListDivTitle.innerText = projectsList[i]['title'];
            projectListDiv.appendChild(projectListDivTitle);
            const projectListDivNum = document.createElement('p');
            projectListDivNum.classList.add('project-card-list-num');
            projectListDivNum.innerText = projectsList[i]['todos'].length + ' tasks';
            projectListDiv.appendChild(projectListDivNum);
            recentProjectsCard.appendChild(projectListDiv);
            // event listener to open this project modal
            projectListDiv.addEventListener('click', function() {
                //display this project
                // TODO: FINISH THIS
                console.log('Project list project clicked: ' + projectsList[i]['title']);
            });
        };
    };
    
    // Display the dashboard
    static dashboard() {
        // reset content
        const content = document.getElementById('content');
        content.innerHTML = '';

        // add header
        const header = document.getElementById('header');
        header.innerText = 'Dashboard';

        // total projects card
        const totalProjectsCard = document.createElement('div');
        totalProjectsCard.classList.add('card');
        totalProjectsCard.setAttribute('id', 'totalProjectsCard');
        
        const totalProjectsCardTitle = document.createElement('p');
        totalProjectsCardTitle.classList.add('totalCardTitle');
        totalProjectsCardTitle.innerText = 'Projects';
        totalProjectsCard.appendChild(totalProjectsCardTitle);

        const totalProjectsCardNumber = document.createElement('p');
        totalProjectsCardNumber.classList.add('totalCardNumber');
        totalProjectsCardNumber.innerText = getNumProjects();
        totalProjectsCard.appendChild(totalProjectsCardNumber);

        content.appendChild(totalProjectsCard);

        // total tasks card
        const totalTasksCard = document.createElement('div');
        totalTasksCard.classList.add('card');
        totalTasksCard.setAttribute('id', 'totalTasksCard');
        
        const totalTasksCardTitle = document.createElement('p');
        totalTasksCardTitle.classList.add('totalCardTitle');
        totalTasksCardTitle.innerText = 'Tasks';
        totalTasksCard.appendChild(totalTasksCardTitle);

        const totalTasksCardNumber = document.createElement('p');
        totalTasksCardNumber.classList.add('totalCardNumber');
        totalTasksCardNumber.innerText = getNumTodos();
        totalTasksCard.appendChild(totalTasksCardNumber);

        content.appendChild(totalTasksCard);

        // total overdue tasks card
        const totalOverdueCard = document.createElement('div');
        totalOverdueCard.classList.add('card');
        totalOverdueCard.setAttribute('id', 'totalOverdueCard');
        
        const totalOverdueCardTitle = document.createElement('p');
        totalOverdueCardTitle.classList.add('totalCardTitle');
        totalOverdueCardTitle.innerText = 'Overdue';
        totalOverdueCard.appendChild(totalOverdueCardTitle);

        const totalOverdueCardNumber = document.createElement('p');
        totalOverdueCardNumber.classList.add('totalCardNumber');
        // TODO: function for getting total overdues number called here
        totalOverdueCardNumber.innerText = '2';
        totalOverdueCard.appendChild(totalOverdueCardNumber);

        content.appendChild(totalOverdueCard);

        // container for recent cards
        const recentContainer = document.createElement('div');
        recentContainer.setAttribute('id', 'recentContainer');
        content.appendChild(recentContainer);

        // Recent projects card
        const recentProjectsCard = document.createElement('div');
        recentProjectsCard.classList.add('card');
        recentProjectsCard.setAttribute('id', 'recentProjectsCard');

        // Recent projects card title container
        const recentProjectsCardTitleContainer = document.createElement('div');
        recentProjectsCardTitleContainer.classList.add('recentCardTitleContainer');
        recentProjectsCard.appendChild(recentProjectsCardTitleContainer);

        // Recent projects card title
        const recentProjectsCardTitle = document.createElement('p');
        recentProjectsCardTitle.classList.add('recentCardTitle');
        recentProjectsCardTitle.setAttribute('id', 'recentProjectsTitle');
        recentProjectsCardTitle.innerText = 'Projects';
        recentProjectsCardTitleContainer.appendChild(recentProjectsCardTitle);
        
        // Recent projects card link
        const viewAllProjectsLink = document.createElement('a');
        viewAllProjectsLink.innerText = 'View all projects';
        viewAllProjectsLink.setAttribute('id', 'viewAllProjectsLink');
        recentProjectsCardTitleContainer.appendChild(viewAllProjectsLink);
        
        // Recent projects card subtitle
        const recentProjectsCardSubtitle = document.createElement('p');
        recentProjectsCardSubtitle.classList.add('recentCardSubtitle');
        recentProjectsCardSubtitle.innerText = 'Most recent projects';
        recentProjectsCard.appendChild(recentProjectsCardSubtitle);

        recentContainer.appendChild(recentProjectsCard);

        // Recent tasks card
        const recentTasksCard = document.createElement('div');
        recentTasksCard.classList.add('card');
        recentTasksCard.setAttribute('id', 'recentTasksCard');
        
        // title container
        const recentTasksCardTitleContainer = document.createElement('div');
        recentTasksCardTitleContainer.classList.add('recentCardTitleContainer');
        recentTasksCard.appendChild(recentTasksCardTitleContainer);
        
        // title
        const recentTasksCardTitle = document.createElement('p');
        recentTasksCardTitle.classList.add('recentCardTitle');
        recentTasksCardTitle.setAttribute('id', 'recentProjectsTitle');
        recentTasksCardTitle.innerText = 'Tasks';
        recentTasksCardTitleContainer.appendChild(recentTasksCardTitle);

        // link
        const viewAllTasksLink = document.createElement('a');
        viewAllTasksLink.setAttribute('id', 'viewAllTasksLink');
        viewAllTasksLink.innerText = 'View all tasks';
        recentTasksCardTitleContainer.appendChild(viewAllTasksLink);

        // subtitle
        const recentTasksCardSubtitle = document.createElement('p');
        recentTasksCardSubtitle.classList.add('recentCardSubtitle');
        recentTasksCardSubtitle.innerText = 'Most recent tasks';
        recentTasksCard.appendChild(recentTasksCardSubtitle);

        recentContainer.appendChild(recentTasksCard);

        // event listeners for card links
        viewAllProjectsLink.addEventListener('click', function() {
            DisplayController.showProjectsTab();
            DisplayController.setProjectsNavActive();
        });

        viewAllTasksLink.addEventListener('click', function() {
            DisplayController.showTasksTab();
            DisplayController.setTasksNavActive();

        });

        // display projects
        DisplayController.displayProjectsToDash();
        DisplayController.displayTaskstoDash();
    };


    // Generate the homepage
    homepage() {
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
            });
            const newTaskIcon = document.getElementById('new-task-icon');
            newTaskIcon.src = plus;
            const newTaskLink = document.getElementById('new-task-link');
            newTaskLink.addEventListener('mouseover', function() {
                newTaskIcon.src = plusFilled;
            });
            newTaskLink.addEventListener('mouseleave', function() {
                newTaskIcon.src = plus;
            });
    
            // MODAL
            // onclick event listeners for new links
            newProjectLink.addEventListener('click', DisplayController.showNewProjectModal);
            // onclick event listeners for new links
            newTaskLink.addEventListener('click', DisplayController.showNewTaskModal);
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
                DisplayController.dashboard();
                DisplayController.setDashboardNavActive();
            });
            // Projects
            projectsLink.addEventListener('click', function() {
                // display projects
                DisplayController.showProjectsTab();
                DisplayController.setProjectsNavActive();
            });
            // Tasks
            tasksLink.addEventListener('click', function() {
                // display tasks
                DisplayController.showTasksTab();
                DisplayController.setTasksNavActive();
            });    
        // show dashboard by default
        DisplayController.dashboard();
    };
};

export {DisplayController};
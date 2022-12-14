// This is the DisplayController object that stores the UI functions.

// CSS and image imports
import './style.css';
import redLogo from './assets/logo-red-512px.svg';
import plus from './assets/plus.png';
import plusFilled from './assets/plus-filled.png';
import dash from './assets/dashboards.png';
import task from './assets/task.png';
import idea from './assets/idea.png';

// JS module imports
import { todoList, createTodo, displayTodos, deleteTodo, editTodo, getNumTodos} from "./Todo";
import { createProject, getNumProjects, editProject, deleteProject, Project, projectsList } from './Project';

class DisplayController {
    constructor(){};

    static resetContent() {
        // reset content
        const content = document.getElementById('content');
        content.innerHTML = '';
    };

    static buildTasksCard() {
        // header row

        // display card
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', 'tasks-tab-card');
        content.appendChild(card);

        // add table to card
        const table = document.createElement('div');
        table.classList.add('table');
        card.appendChild(table);

        // header row
        let thead = document.createElement('div');
        thead.classList.add('thead');
        let tbody = document.createElement('div');
        tbody.classList.add('tbody');
        tbody.setAttribute('id', 'tbody');
        table.appendChild(thead);
        table.appendChild(tbody);
        let tr = document.createElement('div');
        tr.classList.add('tr');
        thead.appendChild(tr);
        let th1 = document.createElement('div');
        th1.classList.add('th');
        th1.classList.add('col-1');
        tr.appendChild(th1);
        let th2 = document.createElement('div');
        th2.classList.add('th');
        th2.classList.add('col-2');
        th2.innerText = 'Task';
        tr.appendChild(th2);
        let th3 = document.createElement('div');
        th3.classList.add('th');
        th3.classList.add('col-3');
        th3.innerText = 'Due date';
        tr.appendChild(th3);
        let th4 = document.createElement('div');
        th4.classList.add('th');
        th4.classList.add('col-4');
        th4.innerText = 'Project';
        tr.appendChild(th4);
        let th5 = document.createElement('div');
        th5.classList.add('th');
        th5.classList.add('col-5');
        th5.innerText = 'Priority';
        tr.appendChild(th5);
        let th6 = document.createElement('div');
        th6.classList.add('th');
        th6.classList.add('col-6');
        th6.classList.add('ending-cell-th');
        tr.appendChild(th6);


        let arrayOfTodos = displayTodos();
        for (let i = 0; i < arrayOfTodos.length; i++) {
            // make a table row
            let todoRow = document.createElement('div');
            todoRow.classList.add('tr');
            todoRow.classList.add('todo-row');
            todoRow.classList.add(todoList[i]['priority']);
            todoRow.setAttribute('id', 'todo-row-' + i);
            tbody.appendChild(todoRow);
            // make the th for the checkbox
            let todoDataCheck = document.createElement('div');
            todoDataCheck.classList.add('td');
            todoDataCheck.classList.add('col-1');
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');

            checkbox.classList.add('checkbox-pad');
            checkbox.setAttribute('id', todoList[i]['title'] + '-checkbox')
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('name', 'completed');


            todoDataCheck.appendChild(checkbox);
            todoRow.appendChild(todoDataCheck);
            // make the title th
            let todoTitle = document.createElement('div');
            todoTitle.classList.add('td');
            todoTitle.classList.add('col-2');
            todoTitle.classList.add('todo-title');
            todoTitle.innerText = todoList[i]['title'];
            todoRow.appendChild(todoTitle);
            // make the due date th
            let todoDueDate = document.createElement('div');
            todoDueDate.classList.add('td');
            todoDueDate.classList.add('col-3');
            todoDueDate.innerText = todoList[i]['dueDate'];
            todoRow.appendChild(todoDueDate);
            // make the project th
            let todoProject = document.createElement('div');
            todoProject.classList.add('td');
            todoProject.classList.add('col-4');
            todoProject.innerText = todoList[i]['project'];
            todoRow.appendChild(todoProject);
            // make the priority th
            let todoPriority = document.createElement('div');
            todoPriority.classList.add('td');
            todoPriority.classList.add('col-5');
            todoPriority.classList.add('priority-td');
            let prioritySpan = document.createElement('div');
            let priority = todoList[i]['priority'];
            prioritySpan.classList.add('task-urgency');
            prioritySpan.classList.add(priority);
            prioritySpan.innerText = priority;
            todoPriority.appendChild(prioritySpan);
            todoRow.appendChild(todoPriority);
            // make the ending th
            let endingCell = document.createElement('div');
            endingCell.classList.add('td');
            endingCell.classList.add('col-6');
            endingCell.classList.add('ending-cell');
            endingCell.classList.add('hidden');
            let editButton = document.createElement('button');
            editButton.classList.add('task-btn');
            editButton.classList.add(`index-${i}`)
            editButton.setAttribute('id', 'edit-btn');
            editButton.innerText = 'Edit';
            let deleteButton = document.createElement('button');
            deleteButton.classList.add('task-btn');
            deleteButton.setAttribute('id', `delete-btn`);
            deleteButton.innerText = 'Delete';
            endingCell.appendChild(editButton);
            endingCell.appendChild(deleteButton);
            todoRow.appendChild(endingCell);
            
            // show more info on hover
            let newRow = document.createElement('div');
            newRow.classList.add('hidden');
            newRow.classList.add('expand-container');
            todoRow.appendChild(newRow);

            let expandDateCreated = document.createElement('div');
            expandDateCreated.classList.add('expand-date-created');
            expandDateCreated.classList.add('expand-row');
            newRow.appendChild(expandDateCreated);
            let expandDateCreatedTitle = document.createElement('div');
            expandDateCreatedTitle.classList.add('expand-title');
            expandDateCreatedTitle.innerText = 'Date created';
            let expandDateCreatedContent = document.createElement('div');
            expandDateCreatedContent.classList.add('expand-content');
            expandDateCreatedContent.innerText = todoList[i]['created'];
            expandDateCreated.appendChild(expandDateCreatedTitle);
            expandDateCreated.appendChild(expandDateCreatedContent);
            
            let expandDueDate = document.createElement('div');
            expandDueDate.classList.add('expand-due-date');
            expandDueDate.classList.add('expand-row');
            newRow.appendChild(expandDueDate);
            let expandDueDateTitle = document.createElement('div');
            expandDueDateTitle.classList.add('expand-title');
            expandDueDateTitle.innerText = 'Due date';
            let expandDueDateContent = document.createElement('div');
            expandDueDateContent.classList.add('expand-content');
            expandDueDateContent.innerText = todoList[i]['dueDate'];
            expandDueDate.appendChild(expandDueDateTitle);
            expandDueDate.appendChild(expandDueDateContent);

            let expandDescription = document.createElement('div');
            expandDescription.classList.add('expand-description');
            expandDescription.classList.add('expand-row');
            newRow.appendChild(expandDescription);
            let expandDescriptionTitle = document.createElement('div');
            expandDescriptionTitle.classList.add('expand-title');
            expandDescriptionTitle.innerText = 'Description';
            let expandDescriptionContent = document.createElement('div');
            expandDescriptionContent.classList.add('expand-content');
            expandDescriptionContent.innerText = todoList[i]['description'];
            expandDescription.appendChild(expandDescriptionTitle);
            expandDescription.appendChild(expandDescriptionContent);

            let expandProject = document.createElement('div');
            expandProject.classList.add('expand-project');
            expandProject.classList.add('expand-row');
            newRow.appendChild(expandProject);
            let expandProjectTitle = document.createElement('div');
            expandProjectTitle.classList.add('expand-title');
            expandProjectTitle.innerText = 'Project';
            let expandProjectContent = document.createElement('div');
            expandProjectContent.classList.add('expand-content');
            expandProjectContent.innerText = todoList[i]['project'];
            expandProject.appendChild(expandProjectTitle);
            expandProject.appendChild(expandProjectContent);

            let expandPriority = document.createElement('div');
            expandPriority.classList.add('expand-project');
            expandPriority.classList.add('expand-row');
            newRow.appendChild(expandPriority);
            let expandPriorityTitle = document.createElement('div');
            expandPriorityTitle.classList.add('expand-title');
            expandPriorityTitle.innerText = 'Priority';
            let expandPriorityContent = document.createElement('div');
            expandPriorityContent.classList.add('expand-content');
            expandPriorityContent.classList.add('task-urgency');
            expandPriorityContent.classList.add(todoList[i]['priority']);
            expandPriorityContent.innerText = todoList[i]['priority'];
            expandPriority.appendChild(expandPriorityTitle);
            
            expandPriority.appendChild(expandPriorityContent);
            

            // For Each Row:
            todoRow.addEventListener('mouseenter', function() {
                endingCell.style.display = 'flex';
                newRow.classList.remove('hidden');
                newRow.classList.add('expand');
                if (todoRow.classList.contains('complete')) {
                    expandPriorityContent.classList.add('complete');
                    expandPriorityContent.innerText = 'complete';
                };
                if (!todoRow.classList.contains('complete')) {
                    expandPriorityContent.classList.remove('complete');
                    expandPriorityContent.classList.add(todoList[i]['initialPriority']);
                    expandPriorityContent.innerText = todoList[i]['initialPriority'];
                };
            });

            todoRow.addEventListener('mouseleave', function() {
                endingCell.style.display = 'none';
                newRow.classList.remove('expand');
                newRow.classList.add('hidden');

            })

            // toggle complete checkbox
            if (todoRow.classList.contains('complete')) {
                checkbox.checked = true;
            };

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
                DisplayController.resetContent();
                DisplayController.showTasksTab();
            }); 

            

            // Edit task button event listener
            editButton.addEventListener('click', function() {
                let container = document.getElementById('container');
                let oldPanel = document.getElementById('edit-task-panel');
                if (oldPanel) {container.removeChild(oldPanel);};
                const modal = document.getElementById('misc-modal');
                modal.classList.remove('modal-hidden');
                let index = i;
                // build the form
                let editTaskDisplay = DisplayController.editTaskPanel(index);
                // add form to display
                container.appendChild(editTaskDisplay);
                // save form as a variable
                let form = document.getElementById('edit-task-form');
                // populate select options
                const selections = document.getElementById('edit-project-select');
                selections.innerHTML = '';
                for (let i in projectsList) {
                    let thisProject = projectsList[i]['title'];
                    let optionEl = document.createElement('option');
                    optionEl.setAttribute('value', thisProject);
                    optionEl.innerText = thisProject;
                    selections.appendChild(optionEl);
                }
                // add event listener to cancel button: hide the panel
                let cancelEditButton = document.getElementById('cancel-task-edit-btn');
                cancelEditButton.addEventListener('click', function() {
                    modal.classList.add('modal-hidden');
                    editTaskDisplay.classList.add('hidden');
                });

                // add event listener to save button
                let saveEditButton = document.getElementById('save-task-edit-btn');
                saveEditButton.addEventListener('click', function(e) {
                    // prevent default event and hide panel
                    e.preventDefault();
                    editTaskDisplay.classList.add('hidden');
                    modal.classList.add('modal-hidden');
                    // get info from fields with input
                    let newValues = {};
                    let newTitle = document.getElementById('edit-task-title').value;
                    let newDueDate = document.getElementById('edit-task-due-date').value;
                    let newDescription = document.getElementById('edit-task-description').value;
                    let newProjectTitle;
                    let newPriority;
                    let urgentRadio = document.getElementById('edit-urgent');
                    let normalRadio = document.getElementById('edit-noturgent');
                    if (urgentRadio.checked) {
                        newPriority = 'urgent';
                    } else if (normalRadio.checked) {
                        newPriority = 'normal';
                    };
                    let projectSelect = document.getElementById('edit-project-select');
                    let projectOptions = projectSelect.children;

                    for (let i = 0; i < projectOptions.length; i++) {
                        if (projectOptions[i].selected) {
                            newProjectTitle = projectOptions[i].value
                        }
                    };
                    
                    if (newTitle) {newValues.title = newTitle;};
                    if (newDueDate) {newValues.dueDate = newDueDate;};
                    if (newDescription) {newValues.description = newDescription;};
                    if (newProjectTitle) { newValues.projectTitle = newProjectTitle}
                    if (newPriority) { newValues.priority = newPriority};

                    
                    // update this task with the new values
                    todoList[i] = editTodo(todoList[i], newValues);

                    // reset form and refresh dashboard
                    form.reset();
                    let header = document.getElementById('header');
                    if (header.innerText == 'Dashboard') {
                        DisplayController.dashboard();
                    } else if (header.innerText == "Tasks") {
                        DisplayController.showTasksTab();
                    } else {
                        DisplayController.showProjectsTab();
                    }
                });


                    
            });
            
            deleteButton.addEventListener('click', function() {
                let thisTask = todoList[i];
                deleteTodo(thisTask);
                let parentRow = this.parentElement.parentElement.parentElement;
                let thisRow = this.parentElement.parentElement
                parentRow.removeChild(thisRow);
                // refresh page
                DisplayController.showTasksTab();
            });
            
            
                
        };

    };

    // Show tasks tab
    static showTasksTab() {
        this.setTasksNavActive();
        this.resetContent();
                
        // add header
        const header = document.getElementById('header');
        header.innerText = 'Tasks';

        this.buildTasksCard();
 
    };

    static editTaskPanel(index) {
        // make div panel
        const editTaskPanelDiv = document.createElement('div');
        editTaskPanelDiv.setAttribute('id', 'edit-task-panel');
        editTaskPanelDiv.classList.add('card');
        // add header
        const editTaskPanelHeader = document.createElement('h2');
        editTaskPanelHeader.setAttribute('id', 'edit-task-panel-header');
        editTaskPanelHeader.innerHTML = `Edit Task: <em>${todoList[index]['title']}</em>`
        editTaskPanelDiv.appendChild(editTaskPanelHeader);
        // add form
        const editTaskForm = document.createElement('form');
        editTaskForm.setAttribute('id', 'edit-task-form')
        // form in HTML
        const editTaskFormHTML = `
        <div class="form-control">
        <label for="edit-task-title">Title</label>
        <input type="text" name="edit-task-title" id="edit-task-title" placeholder="${todoList[index]['title']}">
        </div>
        <div class="form-control">
        <label for="edit-task-due-date">Due date</label>
        <input type="date" name="edit-task-due-date" id="edit-task-due-date">
        </div>
        <div class="form-control">
        <label for="edit-task-description">Description</label>
        <textarea name="edit-task-description" id="edit-task-description" style="resize: none;" cols="30" rows="3" placeholder="Edit the description of your task"></textarea>
        </div>
        <div class="form-control">
        <label for="project-select">Project</label>
        <select name="project-select" id="edit-project-select">

        </select>
        </div>
        <div class="form-control">
        <label for="priority">Priority</label>
        <span class="radios">
            <input type="radio" name="priority" id="edit-urgent" value="Urgent"><label for="urgent">Urgent</label>
            <input type="radio" name="priority" id="edit-noturgent" value="Not urgent"><label for="noturgent">Not urgent</label>
        </span>
        </div>

        <div id="edit-task-buttons">
            <span id="save-task-edit">
                <input type="submit" value="Save" id="save-task-edit-btn">
            </span>
            <span id="cancel-task-edit">
                <input type="reset" value="Cancel" id="cancel-task-edit-btn">
            </span>
        </div>
        `;
        editTaskForm.innerHTML = editTaskFormHTML;
        editTaskPanelDiv.appendChild(editTaskForm);
        
        return editTaskPanelDiv;
    };

    static editProjectPanel(index) {
        // make div panel
        const div = document.createElement('div');
        div.setAttribute('id', 'edit-project-panel');
        div.classList.add('card');
        // add header
        const header = document.createElement('h2');
        header.setAttribute('id', 'edit-project-panel-header');
        header.innerHTML = `Edit Project: <em>${projectsList[index]['title']}</em>`
        div.appendChild(header);
        // add form
        const form = document.createElement('form');
        form.setAttribute('id', 'edit-project-form')
        // form in HTML
        const formHTML = `
        <div class="form-control">
        <label for="edit-project-title">Title</label>
        <input type="text" name="edit-project-title" id="edit-project-title" placeholder="${projectsList[index]['title']}">
        </div>
        <div class="form-control">
        <label for="edit-project-due-date">Due date</label>
        <input type="date" name="edit-project-due-date" id="edit-project-due-date">
        </div>
        <div class="form-control">
        <label for="edit-project-description">Description</label>
        <textarea name="edit-project-description" id="edit-project-description" style="resize: none;" cols="30" rows="3" placeholder="Edit the description of your project"></textarea>
        </div>
        <div class="form-control">
            <legend class="edit-project-tasks">Tasks</legend>
            <div id="edit-projects-checkbox-container">
                
            </div>
        </div>
        <div id="edit-project-buttons">
            <span id="save-project-edit">
                <input type="submit" value="Save" id="save-project-edit-btn">
            </span>
            <span id="cancel-project-edit">
                <input type="reset" value="Cancel" id="cancel-project-edit-btn">
            </span>
        </div>
        `;
        form.innerHTML = formHTML;
        div.appendChild(form);    
        return div;
    }

    static buildProjectCard(index) {
        const contentContainer = document.getElementById('content');
        // build a card
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('project-card');
        card.setAttribute('id', 'project-card-' + index);
        contentContainer.appendChild(card);
        // card header div
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('project-card-header');
        card.appendChild(cardHeader);
        // card title
        const cardTitle = document.createElement('p');
        cardTitle.classList.add('project-card-title');
        cardTitle.innerText = projectsList[index]['title'];
        cardHeader.appendChild(cardTitle);
        // card links
        const cardLinks = document.createElement('span');
        cardLinks.classList.add('project-card-links');
        cardHeader.appendChild(cardLinks);
        const expandLink = document.createElement('p');
        expandLink.classList.add('expand-project-link');
        expandLink.setAttribute('id', 'expand-project-' + index);
        expandLink.innerText = 'Expand';
        const editLink = document.createElement('p');
        editLink.classList.add('edit-project-link');
        editLink.setAttribute('id', 'edit-project-' + index);
        editLink.innerText = 'Edit';
        cardLinks.appendChild(expandLink);
        cardLinks.appendChild(editLink);
        // add event listeners to card links
        expandLink.addEventListener('click', function() {
            // remove any old panel
            let container = document.getElementById('container');
            let oldPanel = document.getElementById('expand-project-card');
            if (oldPanel) {container.removeChild(oldPanel);}
            const modal = document.getElementById('misc-modal');
            modal.classList.remove('modal-hidden');
            // build the panel
            let expandProjectDisplay = DisplayController.expandProjectDisplay(index);
            
            // add form to panel
            container.appendChild(expandProjectDisplay);

            // event listener for close panel link
            const closePanel = document.getElementById('close-project-panel-btn');
            closePanel.addEventListener('click', function() {
                container.removeChild(expandProjectDisplay);
                modal.classList.add('modal-hidden');
            });

            // event listener for the "Mark all complete" button
            const markAllComplete = document.getElementById('mark-all-complete-btn');
            markAllComplete.addEventListener('click', function() {
         
                // get all todos in this project's todo list
                let thisProjectTodos = projectsList[index]['todos']
                for (let i = 0; i < thisProjectTodos.length; i++) {
                    if (thisProjectTodos[i]['complete'] == false) {
                        thisProjectTodos[i].toggleCompleteStatus();
                    }
                }
                // refresh the page
                container.removeChild(expandProjectDisplay);
                modal.classList.add('modal-hidden');
                DisplayController.resetContent();
                DisplayController.showProjectsTab();
            });

            // event listener for 'edit project' button
            const editProjectButton = document.getElementById('edit-project-btn');
            editProjectButton.addEventListener('click', function() {
                // open the Edit Project panel

                container.removeChild(expandProjectDisplay);
                let editProjectPanel = DisplayController.editProjectPanel(index);
                container.appendChild(editProjectPanel);

                // get the form
                const editProjectForm = document.getElementById('edit-project-form');
                
                
                 // Populate Tasks checkboxes:
                // get input container and reset to clear
                const inputContainer = document.getElementById('edit-projects-checkbox-container');
                inputContainer.innerHTML = '';
                // get the tasks in this project's todos
                let thisProject = projectsList[index];
                let todos = thisProject.todos;
                
                for (let i = 0; i < todos.length; i++) {
                    let thisTask = todos[i];
                    // make the checkbox container
                    let checkboxContainer = document.createElement('div');
                    checkboxContainer.classList.add('checkbox-container');
                    checkboxContainer.setAttribute('id', 'task-' + i + '-container');
                    inputContainer.appendChild(checkboxContainer);
                    // make the input element
                    let input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.setAttribute('id', 'checkbox-task-' + i);
                    input.setAttribute('name', 'task-' + i);
                    input.setAttribute('value', thisTask['title']);
                    checkboxContainer.appendChild(input);
                    // make the label
                    let label = document.createElement('label');
                    label.setAttribute('for', 'task-' + i);
                    label.innerText = thisTask['title'];
                    checkboxContainer.appendChild(label);
                    let note = document.createElement('span');
                    note.classList.add('note');
                    note.setAttribute('id', 'task-' + i + '-note') ;
                    checkboxContainer.appendChild(note);
                    // check if this Task completed
                    if (thisTask.complete) {
                        note.innerText = 'Complete';
                    };
                    if (!thisTask.complete) {
                        note.innerText = 'Due ' + thisTask['dueDate'];
                    };              
                };

                let instruction = document.createElement('p');
                    instruction.classList.add('how-to');
                    instruction.innerText = "Select a task to remove it from this project"
                    inputContainer.appendChild(instruction);
                

                // add event listener to Cancel button
                const deletebtn = document.getElementById('cancel-project-edit-btn');
                deletebtn.addEventListener('click', function() {
                    editProjectForm.reset();
                    container.removeChild(editProjectPanel);
                    modal.classList.add('modal-hidden');
                });

                // add event listener to Save button
                const saveBtn = document.getElementById('save-project-edit-btn');
                saveBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    let newValues = {};
                    let newTitle = document.getElementById('edit-project-title').value;
                    let newDueDate = document.getElementById('edit-project-due-date').value;
                    let newDescription = document.getElementById('edit-project-description').value;
                    let newTodos = todos;
            
                    for (let i = 0; i < todos.length; i++) {
                        let thisTodo = todos[i];
                    
                        let thisCheckbox = document.getElementById('checkbox-task-' + i);

                        if (thisCheckbox.checked === true) {
                            console.log('Checkbox ' + i + ' was checked');
                            console.log('Please remove task index ' + i + ' from this project\'s todos')
                            newTodos.splice(i, 1);
                            console.log('New todos array with task index ' + i + ' removed: ' + newTodos);
                            thisTodo.project = '';
                        };
                    };
                    
                    if (newTitle) {newValues.title = newTitle};
                    if (newDueDate) {newValues.dueDate = newDueDate};
                    if (newDescription) {newValues.description = newDescription};
                    newValues.todos = newTodos;
                    thisProject = editProject(thisProject, newValues);
                    editProjectForm.reset();
                    DisplayController.resetContent();
                    DisplayController.showProjectsTab();
                    container.removeChild(editProjectPanel);
                    modal.classList.add('modal-hidden');
                
                });
                


                
            });

            // event listener for 'delete project' button
            const deleteProjectButton = document.getElementById('delete-project-btn');
            deleteProjectButton.addEventListener('click', function() {
                deleteProject(projectsList[index]);
                DisplayController.resetContent();
                DisplayController.showProjectsTab();
                container.removeChild(expandProjectDisplay);
                modal.classList.add('modal-hidden');
            })
        });

        editLink.addEventListener('click', function() {
            // clear the panels
            // remove any old panel
            let container = document.getElementById('container');
            let oldPanel = document.getElementById('expand-project-card');
            if (oldPanel) {container.removeChild(oldPanel);};
            const modal = document.getElementById('misc-modal');
            modal.classList.remove('modal-hidden');
            // build the "Edit Project" form
            let editProjectPanel = DisplayController.editProjectPanel(index);
            // add form to display
            container.appendChild(editProjectPanel);
            // save form as a variable
            const editProjectForm = document.getElementById('edit-project-form');
            
            // Populate Tasks checkboxes:
            // get input container and reset to clear
            const inputContainer = document.getElementById('edit-projects-checkbox-container');
            inputContainer.innerHTML = '';
            // get the tasks in this project's todos
            let thisProject = projectsList[index];
            let todos = thisProject.todos;
            
            for (let i = 0; i < todos.length; i++) {
                let thisTask = todos[i];
                // make the checkbox container
                let checkboxContainer = document.createElement('div');
                checkboxContainer.classList.add('checkbox-container');
                checkboxContainer.setAttribute('id', 'task-' + i + '-container');
                inputContainer.appendChild(checkboxContainer);
                // make the input element
                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('id', 'checkbox-task-' + i);
                input.setAttribute('name', 'task-' + i);
                input.setAttribute('value', thisTask['title']);
                checkboxContainer.appendChild(input);
                // make the label
                let label = document.createElement('label');
                label.setAttribute('for', 'task-' + i);
                label.innerText = thisTask['title'];
                checkboxContainer.appendChild(label);
                let note = document.createElement('span');
                note.classList.add('note');
                note.setAttribute('id', 'task-' + i + '-note') ;
                checkboxContainer.appendChild(note);
                // check if this Task completed
                if (thisTask.complete) {
                    note.innerText = 'Complete';
                };
                if (!thisTask.complete) {
                    note.innerText = 'Due ' + thisTask['dueDate'];
                };              
            };

            let instruction = document.createElement('p');
                instruction.classList.add('how-to');
                instruction.innerText = "Select a task to remove it from this project"
                inputContainer.appendChild(instruction);
            

            // add event listener to Cancel button
            const deletebtn = document.getElementById('cancel-project-edit-btn');
            deletebtn.addEventListener('click', function() {
                editProjectForm.reset();
                container.removeChild(editProjectPanel);
                modal.classList.add('modal-hidden');
            });

            // add event listener to Save button
            const saveBtn = document.getElementById('save-project-edit-btn');
            saveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                let newValues = {};
                let newTitle = document.getElementById('edit-project-title').value;
                let newDueDate = document.getElementById('edit-project-due-date').value;
                let newDescription = document.getElementById('edit-project-description').value;
                let newTodos = todos;
        
                for (let i = 0; i < todos.length; i++) {
                    let thisTodo = todos[i];
                   
                    let thisCheckbox = document.getElementById('checkbox-task-' + i);

                    if (thisCheckbox.checked === true) {
                        console.log('Checkbox ' + i + ' was checked');
                        console.log('Please remove task index ' + i + ' from this project\'s todos')
                        newTodos.splice(i, 1);
                        console.log('New todos array with task index ' + i + ' removed: ' + newTodos);
                        thisTodo.project = '';
                    };
                };
                
                if (newTitle) {newValues.title = newTitle};
                if (newDueDate) {newValues.dueDate = newDueDate};
                if (newDescription) {newValues.description = newDescription};
                newValues.todos = newTodos;
                thisProject = editProject(thisProject, newValues);
                editProjectForm.reset();
                DisplayController.resetContent();
                DisplayController.showProjectsTab();
                container.removeChild(editProjectPanel);
                modal.classList.add('modal-hidden');
            });

        });

        
        
        // card subtitle
        const cardSubtitle = document.createElement('div');
        cardSubtitle.classList.add('project-card-subtitle');
        cardHeader.appendChild(cardSubtitle);
        const subtitleDue = document.createElement('p');
        subtitleDue.classList.add('project-subtitle-bold');
        subtitleDue.innerText = 'Due:';
        cardSubtitle.appendChild(subtitleDue);
        const subtitleDate = document.createElement('p');
        subtitleDate.classList.add('project-subtitle-light');
        subtitleDate.innerText = projectsList[index]['dueDate'];
        cardSubtitle.appendChild(subtitleDate);
        // task row
        // for each todo in the project's list of todos
        for (let i = 0; i < projectsList[index]['todos'].length; i++) {

            // make the row 
            const todoRow = document.createElement('div');
            todoRow.classList.add('project-card-task-row');
            // make the checkbox+title container
            const checkTitleContainer = document.createElement('div');
            checkTitleContainer.classList.add('check-title-container');
            todoRow.appendChild(checkTitleContainer);
            // add the checkbox
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', `checkbox-for-task-${i}`);
            checkTitleContainer.appendChild(checkbox);
            // add the title
            const todoTitle = document.createElement('p');
            todoTitle.classList.add('project-card-task-title');
            todoTitle.innerText = projectsList[index]['todos'][i]['title'];
            checkTitleContainer.appendChild(todoTitle);
            // add the priority
            const todoPriority = document.createElement('div');
            todoPriority.classList.add('task-urgency');
            todoPriority.innerText = projectsList[index]['todos'][i]['priority'];
            todoPriority.classList.add(projectsList[index]['todos'][i]['priority']);
            todoRow.appendChild(todoPriority);
            // append to project card
            card.appendChild(todoRow);
            
            // toggle complete checkbox
            
            if (todoPriority.classList.contains('complete')) {
                checkbox.checked = true;
            }

            // add event listener to checkbox
            checkbox.addEventListener('click', function() {
                // toggle complete status of this todo

                projectsList[index]['todos'][i].toggleCompleteStatus();
                todoPriority.innerText = projectsList[index]['todos'][i]['priority'];
                if (projectsList[index]['todos'][i]['complete'] === true) {
                    todoPriority.classList.add('complete');
                    todoRow.classList.add('complete');
                } else if (projectsList[index]['todos'][i]['complete'] === false) {
                    todoPriority.classList.remove('complete');
                    todoRow.classList.remove('complete');
                    todoPriority.classList.add(projectsList[index]['todos'][i]['priority']);
                    todoPriority.innerText = projectsList[index]['todos'][i]['initialPriority'];
                };
                DisplayController.resetContent();
                DisplayController.showProjectsTab();
            }); 

            
        };
        
    };

    static expandProjectDisplay(index) {
        
        // make the div card panel
        const expandProjectPanel = document.createElement('div');
        expandProjectPanel.setAttribute('id', 'expand-project-card');
        expandProjectPanel.setAttribute('data-index-number', index);
        expandProjectPanel.classList.add('card');

        // make the title container
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('expand-project-title-container');
        expandProjectPanel.appendChild(titleContainer);

        // make the title
        const titleRow = document.createElement('div');
        titleRow.classList.add('expand-project-title-row');
        titleContainer.appendChild(titleRow);
        const title = document.createElement('p');
        title.classList.add('expand-project-title');
        title.innerText = projectsList[index]['title'];
        titleRow.appendChild(title);

        const closePanel = document.createElement('p');
        closePanel.classList.add('close-panel-btn');
        closePanel.setAttribute('id', 'close-project-panel-btn');
        closePanel.innerText = 'x';

        titleRow.appendChild(closePanel);

        // make the subtitle
        const subtitleContainer = document.createElement('div');
        subtitleContainer.classList.add('expand-project-subtitle-container');
        titleContainer.appendChild(subtitleContainer);
        const createdContainer = document.createElement('div');
        createdContainer.classList.add('date-container');
        subtitleContainer.appendChild(createdContainer);
        const created = document.createElement('p');
        created.classList.add('project-subtitle-bold');
        created.innerText = 'Created:';
        createdContainer.appendChild(created);
        const createdDate = document.createElement('p');
        createdDate.classList.add('project-subtitle-light');
        createdDate.innerText = projectsList[index]['created'];
        createdContainer.appendChild(createdDate);
        const dueContainer = document.createElement('div');
        dueContainer.classList.add('date-container');
        subtitleContainer.appendChild(dueContainer);
        const due = document.createElement('p');
        due.classList.add('project-subtitle-bold');
        due.innerText = 'Due:';
        dueContainer.appendChild(due);
        const dueDate = document.createElement('p');
        dueDate.classList.add('project-subtitle-light');
        dueDate.innerText = projectsList[index]['dueDate'];
        dueContainer.appendChild(dueDate);
        const description = document.createElement('p');
        description.classList.add('expand-project-description');
        description.classList.add('project-subtitle-light');
        description.innerText = projectsList[index]['description'];
        titleContainer.appendChild(description);

        // make the tasks container
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('expand-project-tasks-container');
        expandProjectPanel.appendChild(tasksContainer);
        const tasksHeader = document.createElement('p');
        tasksHeader.classList.add('expand-project-tasks');
        tasksHeader.innerText = 'Tasks';
        tasksContainer.appendChild(tasksHeader);

        for (let i = 0; i < projectsList[index]['todos'].length; i++) {
            // make the row 
            const todoRow = document.createElement('div');
            todoRow.classList.add('expand-project-task-row');
            todoRow.setAttribute('data-task-index', i);
            
            // make the checkbox+title container
            const checkTitleContainer = document.createElement('div');
            checkTitleContainer.classList.add('check-title-container');
            todoRow.appendChild(checkTitleContainer);
            // add the checkbox
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', `checkbox-for-project-todo-${index}`);
            checkTitleContainer.appendChild(checkbox);
            // add the title
            const todoTitle = document.createElement('p');
            todoTitle.classList.add('project-card-task-title');
            todoTitle.innerText = projectsList[index]['todos'][i]['title'];
            checkTitleContainer.appendChild(todoTitle);
            // add the priority
            const todoPriority = document.createElement('div');
            todoPriority.classList.add('task-urgency');
            todoPriority.innerText = projectsList[index]['todos'][i]['priority'];
            todoPriority.classList.add(projectsList[index]['todos'][i]['priority']);
            todoRow.appendChild(todoPriority);
            // append to project card
            tasksContainer.appendChild(todoRow);
            // toggle complete checkbox
            if (todoPriority.classList.contains('complete')) {
                checkbox.checked = true;
            }
            // add event listener to checkbox
            checkbox.addEventListener('click', function() {
                // toggle complete status of this todo
                projectsList[index]['todos'][i].toggleCompleteStatus();
                todoPriority.innerText = projectsList[index]['todos'][i]['priority'];
                if (projectsList[index]['todos'][i]['complete'] === true) {
                    todoPriority.classList.add('complete');
                    todoRow.classList.add('complete');
                } else if (projectsList[index]['todos'][i]['complete'] === false) {
                    todoPriority.classList.remove('complete');
                    todoRow.classList.remove('complete');
                    todoPriority.classList.add(projectsList[index]['todos'][i]['priority']);
                    todoPriority.innerText = projectsList[index]['todos'][i]['initialPriority'];
                };
                DisplayController.resetContent();
                DisplayController.showProjectsTab();
            }); 
        }

        // make the buttons container
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('expand-project-buttons-container');
        expandProjectPanel.appendChild(buttonsContainer);

        // make the mark all tasks complete button
        const markAllComplete = document.createElement('button');
        markAllComplete.classList.add('mark-all-complete');
        markAllComplete.setAttribute('id', 'mark-all-complete-btn');
        markAllComplete.innerText = 'Mark all complete';
        buttonsContainer.appendChild(markAllComplete);

        // make the edit project button
        const editProjectButton = document.createElement('button');
        editProjectButton.classList.add('edit-project');
        editProjectButton.setAttribute('id', 'edit-project-btn');
        editProjectButton.innerText = 'Edit project';
        buttonsContainer.appendChild(editProjectButton);

        // make the delete project button
        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('delete-project');
        deleteProjectButton.setAttribute('id', 'delete-project-btn');
        deleteProjectButton.innerText = 'Delete project';
        buttonsContainer.appendChild(deleteProjectButton);

        return expandProjectPanel;

    }

    static showProjectsTab() {
        this.resetContent();
        // add header
        const header = document.getElementById('header');
        header.innerText = 'Projects';
        // reset content div to 2 columns
        const contentContainer = document.getElementById('content');
        contentContainer.style.gridTemplateColumns = 'auto auto';
        // for each Project
        for (let i = 0; i < projectsList.length; i++) {
            // build a card
            this.buildProjectCard(i); 
        };
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
                let header = document.getElementById('header');
                if (header.innerText == 'Dashboard') {
                    DisplayController.dashboard();
                } else if (header.innerText == "Tasks") {
                    DisplayController.showTasksTab();
                } else {
                    DisplayController.showProjectsTab();
                }
                
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
                let newProject = createProject(projectInfo.title, projectInfo.description, projectInfo.dueDate);
                // reset form and refresh dashboard
                form.reset();
                let header = document.getElementById('header');
                if (header.innerText == 'Dashboard') {
                    DisplayController.dashboard();
                } else if (header.innerText == "Tasks") {
                    DisplayController.showTasksTab();
                } else {
                    DisplayController.showProjectsTab();
                }
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
                DisplayController.resetContent();
                DisplayController.dashboard();
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
        this.setDashboardNavActive();
        this.resetContent();

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

        // total urgents tasks card
        const totalOverdueCard = document.createElement('div');
        totalOverdueCard.classList.add('card');
        totalOverdueCard.setAttribute('id', 'totalOverdueCard');
        
        const totalOverdueCardTitle = document.createElement('p');
        totalOverdueCardTitle.classList.add('totalCardTitle');
        totalOverdueCardTitle.innerText = 'Urgent tasks';
        totalOverdueCard.appendChild(totalOverdueCardTitle);

        const totalOverdueCardNumber = document.createElement('p');
        totalOverdueCardNumber.classList.add('totalCardNumber');
        const urgentList = [];
        for (const index in todoList) {
            if (todoList[index]['priority'] == 'urgent') {
                urgentList.push(todoList[index])
            }
        };
        totalOverdueCardNumber.innerText = urgentList.length;
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
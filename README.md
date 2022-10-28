# Taskfox
A Productivity App

[Live demo](https://jcrachael.github.io/taskfox/) (work in progress).

Project sourced from [The Odin Project JavaScript Course](https://www.theodinproject.com/lessons/node-path-javascript-todo-list).

## The Project
Create a front-end web application where users can define 'Projects' and add 'Todo' items. When a user first opens the app, a 'Default' Project is initiated where 'Todo' items are added by default. The user can create new Projects and choose which Project their 'Todo' item goes into when making each 'Todo' item. The user will be able to edit, delete and 'Mark complete' individual 'Todo' items and 'Projects'.

View my [Figma mock-up](https://www.figma.com/proto/nmmcav6BnRT6YEon8Egdea/Untitled?node-id=3%3A34&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=3%3A34&hide-ui=1).

## Specifications

### File structure
* todo-list-app
    * src
        * template.html
        * index.js
        * style.css
    * assets
        * images, etc.
    * README.md

### Requirements
* each 'Todo' item will be stored as a JavaScript object 
* each 'Project' item will be stored as a JavaScript object 
* UI views:
    * view all 'Projects'
    * view all 'Todos'
    * view all 'Todos' in a 'Project'
    * view all overdue 'Todos'
    * expand a 'Todo'
    * edit a 'Todo'/'Project'
    * delete a 'Todo'/'Project'
* package with webpack

### UI views
* header & sidebar (on all pages)
    * logo & app name
    * nav links to Dashboard, Projects and Tasks views
    * links for New task and New project
* Dashboard view:
    * card: total number of todos, number of overdue todos > click to view Tasks view
    * card: total number of projects > click to view Projects view
    * card: 4 most recent projects
    * card: 4 most recent tasks
* projects view
    * card for each project with list of todos in the project > click 'Expand' to view that project view
* project view:
    * card with title, date created, description, list of todos,and buttons to:
        * mark all todos complete
        * edit project
        * delete project
* todos view
    * table list all todos and their properties with option to click on todo to expand the todo view with buttons to edit/delete the todo

### Pseudocode

* Todo Object
    * title = 'string',
    * created = Date now object,
    * dueDate = Date object,
    * project = Project object title,
    * priority = 'urgent' or 'not urgent',
    * overdue = false,
    * description = 'string',
    * complete = false,

* Project Object
    * title = 'string',
    * created = Date now object,
    * description = 'string',
    * todos = [array of Todo objects],
    * complete = false,

* todoList Array
    * array of Todo objects

* projectList Array
    * array of Project objects

* When a user first opens the app, immediately generate a new Project object:
    * defaultProject
        * title = 'My First Project',
        * created = Date.now() object,
        * description = 'This is a project. You can add tasks, edit this project, or add a new project.',
        * todos = [],

* Actions:
    * make new Project
    * change Project title
    * toggle Project complete
    * change Project description
    * add Todo to Project.todos
    * remove Todo from Project.todos
    * delete Project
    * make new Todo
    * change Todo title
    * toggle Todo complete
    * toggle Todo priority
    * change Todo description
    * change Todo dueDate
    * change Todo project
    * set Todo to overdue
    * delete Todo
    * display all Todos in todoList array
    * display all Projects in projectList array
    * display x most recent Todos in chronological order
    * display x most recent Projects in chronological order
    * display one Todo
    * display one Project
    * get number of Todos
    * get number of Projects


### Colors
Primary red: #ED533E
Primary light: #F6F2EF
Primary dark: #26242E
Light accent: #ABA2A4
Dark accent: #928D7E
Green: #8bc34a
Yellow: #fdd835
Urgent red: #E10000


### Credits
Fox, idea icons made by [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/).

Plus, delete, edit, check, minus icons made by [dmitri13](https://www.flaticon.com/authors/dmitri13) from [Flaticon](https://www.flaticon.com/).

Dashboard icon by [Stockes Design](https://www.flaticon.com/free-icons/dashboard) on [Flaticon](https://www.flaticon.com/).

Task icon by [icon_small](https://www.flaticon.com/free-icons/task) on [Flaticon](https://www.flaticon.com/).


--- 

Last modified: 28 October 2022
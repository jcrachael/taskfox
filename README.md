# Taskfox
A Todo-List App

Live demo coming soon.

Project sourced from [The Odin Project JavaScript Course](https://www.theodinproject.com/lessons/node-path-javascript-todo-list).

## The Project
Create a front-end web application where users can define 'Projects' and add 'Todo' items. When a user first opens the app, a 'Default' Project is initiated where 'Todo' items are added by default. The user can create new Projects and choose which Project their 'Todo' item goes into when making each 'Todo' item. The user will be able to edit, delete and 'Mark complete' individual 'Todo' items and 'Projects'.

## Mockup
Coming soon.

## Specifications

### File structure
* todo-list-app
    * src
        * template.html
        * index.js
        * style.css
    * assets
        * images, etc.
    * mockups
        * design mockups
    * README.md

### Requirements
* each 'Todo' item will be stored as a JavaScript object with the following properties
    * title
    * description
    * date added
    * due date
    * priority
    * project ('Default' by default)
    * notes
* each 'Project' item will be stored as a JavaScript object with the following properties
    * title
    * description
    * date added
    * due date
    * notes
    * todos (the list of 'Todo' items in this 'Project')
* 'Todo' functionality:
    * edit (title, description, due date, priority, notes, 'Project')
* 'Project' functionality:
    * edit (title, description, due date, notes, todos)
* overall functionality:
    * create new 'Todo'
    * create new 'Project'
    * toggle 'complete' status of a 'Todo' or 'Project'
    * toggle 'Todo' priority
    * edits to 'Todo' and 'Project' properties (title, description, notes, project, todos)\
* UI views:
    * view all 'Projects'
    * view all 'Todos'
    * view all 'Todos' in a 'Project'
    * expand a 'Todo'
    * edit a 'Todo'/'Project'
    * delete a 'Todo'/'Project'
* package with webpack


--- 

Last modified: 28 October 2022
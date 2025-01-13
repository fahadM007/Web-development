# CRUD


Learning objectives
You know what the CRUD acronym stands for.


acronym 
* create 
* read 
* update 
* delete 


# File Structure

```bash
tree --dirsfirst
.
├── templates
│   └── todos.eta
├── app.js
├── todoController.js
└── todoService.js

1 directory, 4 files
```

The file app.js will contain the routing functionality 
todoController.js the controller
todoService.js the service.

# Create

we need to create a form that will allows us to create a todo resource.

# To create a todo item, 
* we need a form,
* a route 
* the controller functionality, and the 
* service functionality


## Showing a form for adding todos

*  we need to have the form and the route that responds with the form 

##  Showing the form on requests

* creates a route that responds with the a rendered todos.eta

## Creating a todo on POST request

* A todo entry should be created when the form is submitted
to the database. 

* To create a todo entry,` we need a route that responds to POST requests to /todos.`

* a controller function that handles the POST request.

* service function that stores the todo entry to the database.

# Functionality for storing submitted data to database

```js
const database = {
  '["todos", "f47ac10b-58cc-4372-a567-0e02b2c3d479"]': { 
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479", 
    todo: "Buy groceries" 
  },
  '["todos", "c56a4180-65aa-42ec-a945-5fd21dec0538"]': { 
    id: "c56a4180-65aa-42ec-a945-5fd21dec0538", 
    todo: "Do homework" 
  }
};
```

# READ

WE learning to read resources from the database 
add functionality to read todos 


## listing Todos

`two functionalties one is to reads the todos from the database`
`Then a functionality to render the todos`


# Reading a list from Deno KV

* to read from the database we use a list method from denoKv 
* The method excepts an `object` as a parameter which has an attribute `prefix`

* The attribute `prefix` is given a list of keys that indicate the key or combination with which the search for entries. 

In this case we look for entries associated with todos 

> the methods returns an asynchronous list iterator with objects with the keys and values of the items that match the prefix

## Linking the service to the controller

Next, we need to link the service to the controller. In todoController.js, we already import the functionality exported by todoService.js, so we need to essentially find a place where we plug in the listTodos functionality.

One meaningful location would be the page with the form for creating a todo, which is handled by the showForm function of todoController.js. Let's use that -- the key change is passing data to the view template in the showForm function. After the change, the function looks as follows.

## Listing the todos in the view template

With the above change, the view template will have access to existing todos through the it.todos variable. Let's add the functionality for listing the todos in the view template.

##  Reading a single todo

reading in crud is also associated with with reading a single entry 

> we add a functionality for reading a single entry 

### steps needed to add a single entry 

* add individual links too the page for individuals tools.
* a new route to the route that corresponds to the link 
* new function to the controller 
* a new function to the service
* new view templates 

## Adding links to the view template

To add links, we use the identifier that we added to the todo items when creating them. Because of this, each todo comes a unique id attribute, which we can use to link to a page with information on the specific todo.

To create the links, we modify the view template todos.eta so that each list item contains a link to a todo-specific page. We can use the todo.id attribute to create the link -- let's assume that the path for individual todos will be identified using a path variable and that individual todo's will be mapped to /todos/:id.

The modified view template looks as follows.

# route requests to the individual todo pages

This is to be expected -- we haven't yet added the route to the router, nor the functionality to the controller, nor the functionality to the service. Let's add them next

Things to be done to add a new route to the router 

* add new route to the router 
* To route requests to the individual todo pages, we need to add a new route to the router. Let's add the route to the app.js file. The route should be a GET request to the path /todos/:id, and it should be handled by the showTodo function of the todoController.js.


# Responding from the controller

Let's add first basic functionality to the controller that just responds with a text that tells what the id of the of the todo that was asked for is.

Let's create the showTodo function to todoController.js. The showTodo function needs to read the path variable id from the request, and respond with the id in text format. To read the path variable, we can use the c.req.param method, which takes the path variable identifier -- in our case id -- as a parameter.

# Update

update in CRUD refers to the ability of being able to modify existing data.


## Creating a form for updating todos
We already have a way to view individual todo items, so we can use that as a starting point for our update functionality. Let's adjust the todo.eta so that instead of showing a todo in a paragraph, it shows a form with a text input field and a submit button, where the text input field has already been populated with the todo text. The form is submitted as a POST request to the /todos/:id endpoint, which we use to identify specific todos.

## Adding a route
# Data in Memory

## Learning objectives

* You know how to temporarily store data on the server.

The earlier we applications the response  is based on the request 
* path 
* method 
* request parameters 

its core for all web applications 

in other cases we need to save or store data on the server and use it when forming response.

# Data in a variable 

The basic form is storing data on a server is in memory and that is by assigning  it in a variable.

In such case the variable is defined outside the function that handles the request.

The function that handles the request will use the variable when forming the response 


The code app.get("/", (c) => c.text(count)); is defining a route handler for an HTTP GET request in a web application framework, likely using a framework like Express.js or Hono. Here’s a breakdown of what it does:

Route Definition: app.get("/")

This defines a route for the root URL ("/"). When a GET request is made to this URL, the specified handler function will be executed.

Handler Function: (c) => c.text(count)

This is an arrow function that takes a single parameter c, which represents the context or request/response object.
c.text(count) sends a response with the content of count as plain text.
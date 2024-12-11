# View Templates and Eta

Learning objectives
You know what view templates are.
You knows the basics of Eta.
You know how templates are used and can use a template when responding to a request.


View templates are HTML-like text files with places for data

when used in servers they are loaded on the server 

where the server injects data into the template producing html 

The resulting HTML is sent to the client in response to request 

eta is a template engine 

_Broadly, template libraries can be categorized into_

1. libraries that disallow adding business logic into the view templates 
2. libraries that allow adding business logic into the view 



| **Library/Framework** | **Restriction Level on Business Logic** | **Example Syntax**     |
|-----------------------|------------------------------------------|-------------------------|
| **React (JSX)**       | Strongly restricted                     | `{name}`                |
| **Angular**           | Strongly restricted                     | `*ngIf="..."`           |
| **Handlebars**        | Logic-less                              | `{{#each}}`             |
| **Django Templates**  | Limited                                 | `{% if ... %}`          |
| **EJS**               | Allows JavaScript                       | `<%= %>`                |
| **Eta**               | Allows JavaScript                       | `<% %>`                 |
| **Blade (Laravel)**   | Allows PHP                              | `@if`                   |
| **PHP (Native)**      | Unrestricted                            | `<?php ... ?>`          |



creating and instance of class we mean creating an object that is based on a specific class 
which acts as blue print for that object 

a class in js is a template or blueprint that defines the structure and behavior methods that the object created from it will have.

In the Hono framework, when you write:

```javascript
const app = new Hono();
```

You're creating an **instance** of the `Hono` class. Here's why this is necessary and what it means:

### Explanation

1. **Hono as a Class**
   - `Hono` is a class that serves as the **main application** for your web server. It contains all the functionality for defining routes, handling HTTP requests, and managing middleware. By creating an instance of `Hono`, you're effectively creating your own web application with its own set of routes and behavior.

2. **The `new` Keyword**
   - The `new` keyword is used to create an **instance** of a class in JavaScript. When you call `new Hono()`, you're creating a specific instance of the Hono app, which means this instance will handle the configuration and behavior you define (like routes, middleware, and request handling) for the web server.
   
3. **Why Do We Create an Instance?**
   - **Encapsulation**: An instance of `Hono` encapsulates all the logic and configuration for handling HTTP requests and responses. If you didn't create an instance, the framework wouldn't know where to store your routes or how to manage incoming requests.
   - **Multiple Applications**: You could create multiple instances of `Hono` if you wanted different apps running with different configurations on the same server. For example, you might have one Hono app for handling API routes and another for handling static assets.
   - **Configuration & Flexibility**: Once you create an instance of `Hono`, you can configure it (add routes, middleware, etc.) and then later tell it to listen for incoming HTTP requests.

### Example Workflow of the `Hono` Instance

When you write:

```javascript
const app = new Hono();
```

You're creating an object `app` that will handle the HTTP routing. Afterward, you can define routes and middlewares for this `app` instance.

For example:

```javascript
const { Hono } = require('hono');

const app = new Hono(); // Create an instance of the Hono app

// Define a route
app.get('/', (c) => {
  return c.text('Hello, Hono!');
});

// Define another route
app.get('/about', (c) => {
  return c.text('About Page');
});

// Start the server
app.listen(3000);
```

In the above code:
- The `app` instance is where we define routes using methods like `app.get()`, `app.post()`, etc.
- The `app.listen(3000)` call tells the `app` instance to start the HTTP server and begin listening for incoming requests on port `3000`.

### Why Is This Important?

1. **Initialization of Web Server**: By creating an instance (`const app = new Hono()`), you initialize the web server, which can then handle requests. Without this instance, you wouldn't be able to set up routes or define the behavior of the application.
   
2. **Route Definition and Middleware**: This instance allows you to attach routes, middleware, and other configurations. For example, if you want to add a route like `/users`, you'd add it to `app` (i.e., `app.get('/users', handler)`), not globally.
   
3. **Handling Requests and Responses**: The `app` instance is responsible for handling incoming requests. When a request comes in, it will check if it matches any of the defined routes in this instance. If a match is found, it will invoke the corresponding route handler.

### In Summary:
- `const app = new Hono();` creates a new instance of the Hono framework, which acts as your web server.
- This instance allows you to configure the app with routes, middleware, and other functionality needed to handle incoming HTTP requests.
- You need to create an instance of the class so that the framework can manage routing and server behavior within that instance.

```js
const { Hono } = require('hono');  // Import Hono class
const app = new Hono();  // Create an instance of Hono (the web server app)

// Define routes
app.get('/', (c) => {
  return c.text('Hello, Hono!');
});

app.get('/about', (c) => {
  return c.text('About Page');
});

// Start the server
app.listen(3000);  // Listen on port 3000

```
## Tree Structure and Explanation

```bash
Hono Web Application (app)
│
├── Instance: app = new Hono()
│   │
│   ├── Method: app.get('/')
│   │   ├── Path: '/'
│   │   └── Handler: (c) => { return c.text('Hello, Hono!'); }
│   │
│   ├── Method: app.get('/about')
│   │   ├── Path: '/about'
│   │   └── Handler: (c) => { return c.text('About Page'); }
│   │
│   ├── Method: app.listen(3000)
│   │   └── Port: 3000
│   │
└── Hono Framework (Hono Class)
    │
    ├── Core Features:
    │   ├── Request handling
    │   ├── Response handling
    │   └── Routing
    │
    └── Methods: get(), post(), listen(), etc.


```

# Explanation of the Tree

### **Hono Web Application (app):**
- This is the top-level instance created by calling `new Hono()`.
- `app` acts as the main object responsible for handling the web server’s routing, requests, and responses.

### **Instance: `app = new Hono()`:**
- `app` is the instance of the `Hono` class. It's where all the functionality of the Hono framework resides for this particular web application.

### **Method: `app.get('/')`:**
- **Path**: `'/'` — This is the URL path that the server will respond to when a `GET` request is made.
- **Handler**: `(c) => { return c.text('Hello, Hono!'); }` — This is the callback function (also called the route handler) that handles the request for the `'/'` path. It returns a simple text response `"Hello, Hono!"`.

### **Method: `app.get('/about')`:**
- **Path**: `'/about'` — This is another URL path that responds to a `GET` request.
- **Handler**: `(c) => { return c.text('About Page'); }` — This route handler returns a text response `"About Page"` when a request is made to the `/about` path.

### **Method: `app.listen(3000)`:**
- **Port**: `3000` — This tells the Hono web server to start listening for incoming HTTP requests on port `3000`.
- This is how the server knows to start and wait for requests to come in.

---

### **Hono Framework (Hono Class):**
- The Hono framework provides core features for handling requests, responses, and routing.

#### **Core Features:**
- **Request handling**: Hono processes incoming HTTP requests.
- **Response handling**: Hono manages how responses are sent back to the client (e.g., returning text, JSON, or HTML).
- **Routing**: Hono matches the incoming request's path and method to the appropriate route handler.

#### **Methods: `get()`, `post()`, `listen()`, etc.:**
- **`get()`**: Registers a handler for the `GET` method on a specified path.
- **`listen()`**: Starts the server and listens for incoming HTTP requests.
- Hono also provides other methods like `post()`, `put()`, `delete()`, etc., for handling different HTTP methods.

---

### **How Each Part Fits Together:**

1. **Step 1**: `new Hono()` creates an instance of the Hono application, where all the configuration, routing, and request handling happen.

2. **Step 2**: The `app.get('/')` and `app.get('/about')` define routes for specific URL paths (i.e., `'/'` and `'/about'`). Each route is paired with a handler function that defines what happens when a request is made to that path.

3. **Step 3**: `app.listen(3000)` starts the server on port `3000`. This means the application is now waiting for incoming HTTP requests at `http://localhost:3000`.

4. **Step 4**: When a request is made to one of the paths (like `'/'` or `'/about'`), Hono looks up the route, matches it, and invokes the appropriate handler, which sends a response back to the client.


```bash 


Eta (Class)
├── Constructor (Eta(config))
│   ├── config (object)
│   │   ├── views (string)      // Path to the directory containing templates
│   │   ├── cache (boolean)     // Enable template caching (optional)
│   │   ├── other config options...
│   └── Returns an instance of Eta
│
├── Methods:
│   ├── render(templateName, data)
│   │   ├── templateName (string)  // Name of the template to render
│   │   ├── data (object)          // Data to be injected into the template
│   │   └── Returns rendered string with data injected into the template
│   │
│   ├── compile(template)
│   │   ├── template (string)      // Template source code
│   │   └── Returns compiled template function
│   │
│   ├── configure(config)
│   │   ├── config (object)       // Additional configuration for Eta instance
│   │   └── Returns updated Eta instance
│   │
│   └── other utility methods...
│
├── Template Loading:
│   ├── views (string)  // Directory path configured to load templates
│   ├── file system (async)  // Resolves templates from the views directory
│   └── template extension (optional, e.g., .eta, .html)
│
└── Other Features:
    ├── Caching of templates (if enabled)
    ├── Template partials and includes
    └── Support for layout inheritance (depending on version and setup)
```

he options are configuration properties that you pass to the Eta instance when creating it. These properties help customize Eta's behavior, such as where to find the templates (views), whether to enable debugging (debug), and whether to cache templates (cache). They are not methods, but instead control how the template engine operates.

In the examples you've provided, the options object is simply an object containing these properties that you pass to the constructor when initializing Eta. Methods like render, renderAsync, and renderString are used for rendering templates and are distinct from the configuration options.


deno
├── core
│   ├── std
│   │   ├── fs
│   │   │   ├── Deno.readFile()          # Reads a file as a Uint8Array
│   │   │   ├── Deno.writeFile()         # Writes to a file from a Uint8Array
│   │   │   ├── Deno.appendFile()        # Appends content to a file
│   │   │   ├── Deno.remove()            # Removes a file or directory
│   │   │   └── Deno.rename()            # Renames or moves a file
│   │   ├── path
│   │   │   ├── path.join()              # Joins path segments
│   │   │   ├── path.basename()          # Gets the last portion of a path
│   │   │   └── path.resolve()           # Resolves relative paths to absolute paths
│   │   ├── http
│   │   │   ├── deno.serve()             # A function to create a simple HTTP server
│   │   │   ├── ServerRequest            # Represents an HTTP request
│   │   │   ├── ServerResponse           # Represents an HTTP response
│   │   │   ├── serve()                  # Starts a server
│   │   │   └── createServer()           # Creates an HTTP server instance
│   │   ├── os
│   │   │   ├── Deno.hostname()          # Gets the hostname of the machine
│   │   │   ├── Deno.memoryUsage()       # Returns the current memory usage
│   │   │   └── Deno.uptime()            # Gets the system uptime in seconds
│   │   ├── testing
│   │   │   ├── Deno.test()              # Runs a test
│   │   │   ├── assertEquals()           # Asserts equality in tests
│   │   │   ├── assertThrows()           # Asserts that an error is thrown
│   │   │   └── assertNotEquals()        # Asserts that two values are not equal
│   │   ├── timers
│   │   │   ├── setTimeout()             # Executes a function after a delay
│   │   │   ├── clearTimeout()           # Clears a timeout
│   │   │   ├── setInterval()            # Executes a function repeatedly with an interval
│   │   │   └── clearInterval()          # Clears an interval
│   ├── events
│   │   ├── EventEmitter()               # Event-driven programming (like Node.js EventEmitter)
│   ├── net
│   │   ├── Deno.listen()                # Listens for incoming TCP connections
│   │   ├── Deno.connect()               # Connects to a remote server
│   │   └── Deno.send()                  # Sends data over a TCP connection
│   ├── wasi
│   │   ├── Deno.wasi()                  # WebAssembly System Interface (WASI) support
│   ├── fetch
│   │   ├── fetch()                      # Performs HTTP requests (similar to `fetch` in browsers)
│   │   └── Response()                   # Represents the HTTP response
│   ├── runtime
│   │   └── Deno.run()                   # Executes system commands or shell scripts
│   └── permissions
│       ├── Deno.permissions.request()   # Requests permissions for specific actions
│       └── Deno.permissions.query()     # Queries current permissions
├── standard_modules
│   ├── deps.ts                          # Imports and manages external dependencies
│   ├── encoding                         # Provides support for text encoding and decoding
│   ├── uuid                             # Provides UUID generation functions
│   ├── colors                           # Provides color utilities for terminal output
│   └── date                             # Date utilities for working with dates
├── Deno API
│   ├── Deno.run()                       # Runs a system command, script, or process
│   ├── Deno.readFile()                  # Reads a file into a byte array
│   ├── Deno.writeFile()                 # Writes a byte array to a file
│   ├── Deno.env()                       # Accesses environment variables
│   ├── Deno.permissions()               # Manages runtime permissions
│   ├── Deno.cwd()                       # Returns the current working directory
│   ├── Deno.stat()                      # Returns file or directory stats
│   ├── Deno.mkdir()                     # Creates a directory
│   ├── Deno.readTextFile()              # Reads a file as text
│   ├── Deno.writeTextFile()             # Writes text to a file
│   └── Deno.exit()                      # Exits the program with an optional exit code
├── URL API
│   ├── URL()                            # Creates a URL object
│   ├── URLSearchParams()                # Parses query string parameters
│   └── URL.origin                       # The origin of the URL
├── Modules & Imports
│   ├── import()                         # Dynamic imports of ES Modules
│   ├── import.meta                      # Meta information about the current module
│   ├── import maps                      # Maps module paths to URLs
│   └── ES Modules                       # Deno natively supports ES Modules (import/export)
├── Workers
│   ├── Deno.run()                       # Runs a command or script in a separate worker
│   ├── Deno.Worker()                    # Creates a worker for background tasks
│   └── SharedWorker                     # Allows sharing workers between different scripts
└── Permissions & Security
    ├── Deno.permissions.request()       # Requests a permission from the user
    ├── Deno.permissions.query()         # Queries the status of a permission
    ├── --allow-net                      # Permission to access network resources
    ├── --allow-read                     # Permission to read files from the filesystem
    ├── --allow-write                    # Permission to write files to the filesystem
    ├── --allow-env                      # Permission to access environment variables
    ├── --allow-run                      # Permission to run external processes
    ├── --allow-hrtime                   # Permission to use high-resolution timers


eta render method 
Deno file current function 
html method 
#  Adding Data to Templates

Learning objectives
You know how to add data to view templates.

ETA (Embedded Template Analytics) is a JavaScript templating language similar to **EJS (Embedded JavaScript)**, optimized for speed and flexibility.

### Syntax Breakdown

- **`<%= ... %>`**: This is an **interpolation tag** in ETA. Anything inside `<%= ... %>` will be evaluated as JavaScript, and its result will be injected into the template as a string.
- **`it.count`**: `it` is the **default context object** in ETA, holding the data passed to the template. Here, `it.count` accesses the `count` property of the data object passed in.

### Example Use of ETA Template

Suppose you render this template with the following data:

```javascript
const eta = require("eta");

const template = "<p>The count: <%= it.count %>!</p>";
const data = { count: 42 };

eta.render(template, data);
// Output: <p>The count: 42!</p>


object property shorthand 

In js shorthand is used when the property name and variable name have the same identifier 

# JavaScript Object Property Shorthand

Here’s how **object property shorthand** works in JavaScript using basic objects. This shorthand allows you to create an object without repeating the variable names when the property names match the variable names.

## Example of Object Property Shorthand

Suppose you have some variables that you want to include in an object:

```javascript
const name = "Alice";
const age = 30;
const country = "Wonderland";
```




## Multiple variables

the data that is rendered by eta is given to eta.render function as the second parameter 

its presented as js obeject 

The object can contain multiple properties, which can each be used in the view template.


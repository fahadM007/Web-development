# Eta Syntax and JavaScript

Learning objectives
You know how template values are used in Eta.
You know how to use JavaScript in Eta.
You know where to look for Eta errors.

Let us dive deeper into Eta syntax. Eta syntax can be divided into two parts,

* one part is related to replacing template values with data from the server, and 

* the other is related to JavaScript operations in files.

* Template Value Replacement: Focused on embedding data values within HTML, ensuring safe rendering through interpolation and raw tags.

* JavaScript Operations: Allows complex control of template rendering with conditional statements, loops, and other JavaScript logic embedded within the template.

## Template values

This part of Eta syntax is focused on injecting data from the server into the template. It involves using special tags to embed variables and values dynamically within the HTML.

### Key Elements

* interpolation Tags (`<%=...%>`);
 * Syntax: <%= variable %>
 * Description: Inserts escaped content (to prevent XSS attacks).
* Example: <p>Hello, <%= user.name %>!</p> would output Hello, Alice! if user.name is "Alice".

Tag	Description
<%= ... %>	Escapes and inserts content to prevent XSS.
<%- ... %>	Inserts unescaped content (use with caution).
<% ... %>	Executes JavaScript code without inserting output.

XSS attacks occur when an attacker is able to inject malicious scripts into web pages viewed by other users. To prevent this, Eta provides mechanisms to "escape" any potentially unsafe content before rendering it in the template.

By default, when you insert content using <%= content %>, Eta automatically escapes it. This means special characters (like <, >, &, and " used in HTML) are converted to their corresponding HTML entities. For example:

In this context, it doesn’t usually stand for a specific word; it's just a commonly used shorthand for "item" or "input." Some templating engines and JavaScript libraries use it as a default name for the main data object being passed in, and this has become a convention in some coding practices for simplicity.

In other cases, it could represent "information template," "instance template," or something similar, but generally, it's just a placeholder name without a long-form term behind it.

An HTML entity is a code that represents a special character in HTML. It allows you to display characters that might otherwise be interpreted as part of HTML syntax or are not easily typed on a keyboard. HTML entities start with an ampersand (&), followed by a code, and end with a semicolon (;).

For example:

&lt; represents < (less-than sign)
&gt; represents > (greater-than sign)
&amp; represents & (ampersand)
HTML entities are essential for displaying special characters without confusing the HTML parser.

Certainly! This format is commonly used in **Eta templates** (similar to EJS). Let’s break down each step with small examples:

### Step 1: Understanding `<%= it.variable %>`

In Eta templates, `<%= ... %>` is used to **insert variable values** from the server into an HTML document. When we use `<%= it.variable %>`, the variable’s content is added to the HTML as text, not HTML code. This ensures that if the variable contains HTML tags or special characters, they won’t break the document structure or create security risks.

### Step 2: Escaping HTML Content in Variables

When inserting a variable with `<%= ... %>`, Eta **automatically escapes HTML content**. This means special characters in the variable (like `<`, `>`, `&`) are converted to HTML entities (e.g., `&lt;`, `&gt;`, `&amp;`).

For example:
```javascript
// Server-side code: passing a variable to the template
const data = { name: "Hello <strong>World</strong>" };

// In Eta template:
// <%= it.name %>
```

**Result on the webpage**:
```html
Hello &lt;strong&gt;World&lt;/strong&gt;
```

This displays as **Hello `<strong>World</strong>`** in plain text, without any bold formatting.

### Step 3: Using `it.` Prefix in Eta Templates

In Eta, all variables are accessed using the `it.` prefix. For instance, if the server sends a variable called `name`, you refer to it in the template as `it.name`.

**Example:**
1. **Server-side code:**
   ```javascript
   const data = { greeting: "Hello", name: "Alice" };
   ```
2. **Eta Template:**
   ```html
   <p><%= it.greeting %>, <%= it.name %>!</p>
   ```
3. **Rendered HTML:**
   ```html
   <p>Hello, Alice!</p>
   ```

### Step 4: Converting Special Characters to HTML Entities

If `it.name` has HTML content (e.g., `<b>bold</b>`), Eta converts `<` and `>` to `&lt;` and `&gt;`:

**Example:**
1. **Server-side code:**
   ```javascript
   const data = { message: "Stay <b>bold</b>!" };
   ```
2. **Eta Template:**
   ```html
   <p>Message: <%= it.message %></p>
   ```
3. **Rendered HTML:**
   ```html
   <p>Message: Stay &lt;b&gt;bold&lt;/b&gt;!</p>
   ```

**Result on the webpage:** `Message: Stay <b>bold</b>!` (appears as plain text, not bolded)

### Summary

- `<%= it.variable %>`: inserts variable values into HTML as text.
- Special characters like `<`, `>`, and `&` are escaped to `&lt;`, `&gt;`, and `&amp;`.
- `it.` prefix is used to refer to variables in Eta templates. 

This ensures safe, formatted text display without interpreting HTML inside variables.

* The format that starts with <%~ , followed by a variable name with an it-prefix, and a %>, is also used for inserting variable values to the document. In this format, however, possible HTML content in the variable is not escaped, which means that HTML content is shown as HTML. Similarly, to the previous, all variables from the server have a prefix it, meaning that a variable called name from the server is added to an Eta document as <%~ it.name %>.

>In Eta templates, <%~ it.name %> is called an escaped evaluation tag.
> In Eta templates, <% code %> is called an evaluation tag.An evaluation tag executes JavaScript code within the template but does not output anything to the HTML. It’s used for logic or control structures, such as loops and conditional statements.
> In Eta templates, <%= it.greeting %> is called an output tag or variable interpolation tag.It is used to insert the value of a variable (it.greeting in this case) into the rendered HTML. The value is escaped automatically, meaning that any special HTML characters in the variable are converted into their HTML entities or plain text 
> In Eta templates, <% code %> is called an evaluation tag. evaluation tag executes JavaScript code within the template but does not output anything to the HTML. It’s used for logic or control structures, such as loops and conditional statements.




# JavaScript in view templates

> tag executes JavaScript code within the template but does not output anything to the HTML. It’s used for logic or control structures, such as loops and conditional statements.
> In Eta templates, <%= it.greeting %> is called an output tag or variable interpolation tag.It is used to insert the value of a variable (it.greeting in this case) into the rendered HTML. The value is escaped automatically, meaning that any special HTML characters in the variable are converted into their HTML entities or plain text 
> In Eta templates, <% code %> is called an evaluation tag. evaluation tag executes JavaScript code within the template but does not output anything to the HTML. It’s used for logic or control structures, such as loops and conditional statements.


# Eta and syntax errors


Note that like any syntax, Eta is susceptible to syntax errors. If we, for example, leave out the last curly bracket, we receive a response stating Internal Server Error.

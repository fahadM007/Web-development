# Optional and Default Content

Learning objectives
You know how to show a value only if it exists.
You know how to use default values.

```eta
<!DOCTYPE html>
<html>
  <head>
    <title>Hello there!</title>
  </head>
  <body>
    <h1>The heading: <%= it.heading %>!</h1>
    <% if (it.count === 1) { %>
      <p>The secret: <%= it.secret %>!</p>
    <% } %>
    <p>The count: <%= it.count %>!</p>
    <p>Escaped HTML: <%= it.variable %>!</p>
    <p>Non-escaped HTML: <%~ it.variable %>!</p>
    <% if (it.email) { %>
      <p>Email address: <%= it.email %>!</p>
    <% } %>
  </body>
</html>
```

if code is not formated on the server then the eta template will not show the added code 

Similarly to showing a value only if it is present, we can show default values if a value is not present. This can be done using the nullish coalescing operator ??

The ?? can be used in a view template similarly to how it is used in JavaScript. The following example shows how we can show a default value if the email address is not available.

``` eta
<!DOCTYPE html>
<html>
  <head>
    <title>Hello there!</title>
  </head>
  <body>
    <h1>The heading: <%= it.heading %>!</h1>
    <% if (it.count === 1) { %>
      <p>The secret: <%= it.secret %>!</p>
    <% } %>
    <p>The count: <%= it.count %>!</p>
    <p>Escaped HTML: <%= it.variable %>!</p>
    <p>Non-escaped HTML: <%~ it.variable %>!</p>
    <p>Email address: <%= it.email ?? "Unknown" %>!</p>
  </body>
</html>
```
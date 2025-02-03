# Cookies and Applications

* Learning objectives
You know how to implement an application that uses cookies.


we need the helper library that that helped in setting getting and deleting cookies 

# setCookies 

function that is setCookies takes three parameters 

setCookies(context,name of the cookie,value of the cookie)

# getCookies 

function that is used to read the cookies values from the request 

it take two parameters first one is context and the second one is name of the cookie 

When you request a page, the behavior of the `setCookie` function depends on whether the request is the first one or a subsequent one:  

### **First Request (No Cookie Set Yet)**  
1. The browser sends a request to the server (e.g., visiting `/`).  
2. The server processes the request and runs the `setCookie` function.  
3. The server responds with a `Set-Cookie` header in the HTTP response.  
4. The browser stores the cookie (if allowed by the browser settings and not blocked by security policies).  

**Example Response Header:**  
```
Set-Cookie: count=1; Path=/; HttpOnly
```

### **Subsequent Requests (Cookie Already Set)**  
1. The browser automatically sends the stored cookie along with future requests to the same domain.  
2. The server can read the cookie from the request headers and use its value to modify the response.  

**Example Request Header Sent by Browser:**  
```
Cookie: count=1
```

### **Behavior Depending on Settings**  
- If the cookie has an `expires` or `max-age` attribute, it persists until it expires.  
- If it's a **session cookie** (no expiration set), it is deleted when the browser is closed.  
- If `HttpOnly` is set, JavaScript cannot access the cookie (only the server can read it).  

Would you like a demo of how to read the cookie value when the user revisits the page? 🚀
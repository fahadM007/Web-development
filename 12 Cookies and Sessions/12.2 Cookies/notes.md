# Cookies

Cookies are mechanism for storing small amount of data on the client side 
which the client send to the server on every subsequent request 

The main purpose is to track user across requests.

In practice the when the client request to the server 

in response the server includes a set of cookies headers  

![cookies](https://youtu.be/s04Vjlcgwco?si=BcA8otJooeMhjo6h)

They are implemented using HTTP protocol headers. 

when a client send a request to the server the server adds **Set-Cookie** header to the response 

```js
Set-Cookie: visits=0;

```


Now, when a client receives a response that contains such a cookie, the client stores the cookie locally. Then, on subsequent requests made by the client, the client adds the cookie to the request in a header called Cookie.```


Set-Cookie: user=JohnDoe; expires=Wed, 09 Feb 2025 10:18:14 GMT; path=/; domain=example.com

cookies are set as key value pairs guiding information can be included when setting up a coolie.

* information includes maximum age of the cookie (Max-Age);
* a path or a part of a path where the cookie is valid (Path);
* the domain or part of a domain where the cookie is valid (Domain)
* a version of the cookie (Version), information on whether the cookie should be sent only over a secure connection,
* whether the cookies should not be accessible using JavaScript in the browser (HttpOnly)


```http
Set-Cookie: name=anonymous; 
            Max-Age=3600; 
            Domain=".aalto.fi"; 
            Path="/"; 
            Secure; 
            HttpOnly; 
            SameSite=Lax;
```

* name=anonymous: This sets the cookie with the name name and value anonymous.
* Max-Age=3600: This specifies that the cookie will expire in 3600 seconds (1 hour) from the moment it's set. After this period, the cookie will be deleted automatically.
* Domain=".aalto.fi": This sets the domain where the cookie is valid. In this case, it is valid for all subdomains of aalto.fi (like www.aalto.fi or mail.aalto.fi).
* Path="/": This specifies the URL path where the cookie will be sent. The cookie is valid for all paths under /, meaning it will be sent with all requests to this domain.
* Secure: This indicates that the cookie should only be sent over HTTPS (i.e., secure connections). If the request is not over HTTPS, the cookie will not be sent.
* HttpOnly: This makes the cookie inaccessible to JavaScript running on the client side (e.g., through document.cookie). This helps to protect against cross-site scripting (XSS) attacks by limiting access to the cookie.
* SameSite=Lax: This controls whether the cookie is sent with cross-origin requests. Lax means the cookie will be sent with top-level navigations and when the user is navigating to the site, but not for other types of cross-origin requests like those initiated by embedded content.


HTTP/1.1 200 OK
Content-Type: text/html
Set-Cookie: name=anonymous; Max-Age=3600; Domain=".aalto.fi"; Path="/"; Secure; HttpOnly; SameSite=Lax;

Cookies are stored within a register in the browser, from where they are retrieved whenever a request is made. The register is stored in a file, which means that the cookies persist also if the browser or the computer is restarted.

>Note that when you test applications that use cookies, it is meaningful to use the incognito mode in browsers. When you restart testing an application, you can also restart the browser window. This way, you will have a new session. Another option is to use curl and add the necessary cookie headers into requests.


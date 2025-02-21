# Cookies and Applications

Learning objectives
You know how to implement an application that uses cookies.

## Setting and getting Cookue values 

Hono has a set of cookie helpser that make it easy 

we import functions that help in creating cookies and setCookies from the library.

we getCookies from intial request  this due that we have alraedy a cookie in the system.
we setCookies from intial request 


```curl
curl -v -H "Cookie: count=1" localhost:8000

```


However, if you open up the above application locally and accessing it with your browser, you'll notice that the response is "Hello cookies -- undefined!" only on the first request. On subsequent requests, the response is "Hello cookies -- 1!". This is because the browser automatically sends the cookies that it has stored for the domain.
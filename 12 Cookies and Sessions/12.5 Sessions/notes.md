# Sessions

Learning objectives
You know what sessions are and how they differ from using cookies.


cookies are stored by the client 

This also means that if there is a need to store additional information about the client, for example to keep track of a user who has logged into the system, that information also needs to be a part of a cookie

its possible to store the information on the server and use the cookie to identify the client  


Session are mechanism that allow storing  information about a client on the server.

This means that the cookie can be used to to track user across request 
but the data stored on the server is not  accessible to the client 

> when using sessions the cookies contains a long random string that is passed back and forth between the server and the client. 
> On the server the cookies is resolved as an object that stored in the server which contains data related to a particular cookies and client  



In practice, the session information could be stored in a database (such as Deno KV), or in a file. In such a case, the session would be available also after server restarts.
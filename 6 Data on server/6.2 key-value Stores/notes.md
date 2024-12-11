# Key-Value Stores  database 

use cases used to caching session management or storing configurations data

## Learning objectives

* You know what key-value stores are and you know of Deno KV.

* You know how to use a key-value store in a web application.

when data is stored in a variable and in memory when ever the server is started  the data is lost 

* persist data 

data needs to be stored in a physical format 
Key-value stores are a type of database that store data in a key-value format

we use the asynchronous function 

_**key value**_ stores are types of database that store data in a key value format.

to retrieve a name stored with the key name we use the key name 

asynchronous functions are utilized when working with retrieving data from the server.


# Retrieving a value

* the `get` method is used to for retrieving a value 

* it takes a list with a string as a parameter 

* the key is the string that is used 

_opening the key value store_
_retrieving the value for the count_

```js
const kv = await Deno.openKv();
const count = await kv.get(["name"]);

```

# Setting a value

set is used to setting a value 

takes two parameters 

1 a array containing a string that indicates the name of the key 
2 the value that should be stored 

# Deleting a value

used to delete a  value 


Getting and setting a value
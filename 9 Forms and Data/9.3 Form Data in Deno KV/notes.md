

# Form Data in Deno KV

Learning objectives
You know how to store submitted form data using Deno KV.
You know how to retrieve a list of data from Deno KV.

Although we've seen how to store submitted form data in a variable, this is not a good solution for storing data in the long term. As we know, if the server is restarted, the data is lost. We previously briefly looked into working with Deno KV -- let's now use it to store submitted form data

## Opening a connection and storing an address


we use Deno.openKV to open a connection to the database 
we use `set` method to set the value 

#### about the set method

It take two parameters a `list` and a `value` 

Methods on Kv:
get(): Fetch data by key.
set(): Store data by key.
delete(): Remove data by key.
has(): Check if key exists.
list(): Iterate through stored keys.
clear(): Clear all keys.
close(): Close the key-value store.
transaction(): Perform multiple operations in a transaction.
KvTransaction (used with transaction method):
Allows you to make changes atomically and consistently.

Overview of Deno KV
Deno KV is a persistent, key-value database used in Deno applications to store data. It's designed for simple and fast storage, where you can use the set() method to insert or update a key-value pair in the database. The main features include:

Atomic updates: You can store values atomically.
Persistent: Data is stored persistently across server restarts.
Strong consistency: It ensures strong consistency, making it suitable for serverless applications.

Syntax of set() in DenoKv 

kv.set(key,value):


In the code you've provided, the `prefix: ["addresses"]` is used within the `kv.list()` method to filter and list only the key-value pairs that match a certain prefix.

Here’s a breakdown of how it works:

### Purpose of `prefix`
The `prefix` option in `kv.list()` is used to retrieve a subset of key-value pairs that share the same key prefix. In this case, the prefix is `["addresses"]`.

- When you use a prefix like `["addresses"]`, it ensures that only keys that start with `["addresses"]` will be returned. So, for instance, if you have stored data under keys like `["addresses", "home"]`, `["addresses", "work"]`, and `["addresses", "vacation"]`, using the prefix `["addresses"]` will return all entries whose keys start with that array.

### Why it's useful in this case
In the `addAddress` function, you're storing address data under keys like `["addresses", addressData.name]`. This means each address is saved with the `name` as part of the key, making it unique. 

When you use the prefix `["addresses"]` in the `listAddresses` function, you are filtering the keys to only include those that start with `["addresses"]`. This effectively gives you all the stored addresses in your database, which are stored under different `name` values, but all fall under the `addresses` namespace.

### Example:
- If you store data for two addresses like this:
  ```js
  await kv.set(["addresses", "home"], { name: "home", street: "123 Main St" });
  await kv.set(["addresses", "work"], { name: "work", street: "456 Work Rd" });
  ```
  Then calling `kv.list({ prefix: ["addresses"] })` will return both addresses under the `addresses` prefix, specifically the keys `["addresses", "home"]` and `["addresses", "work"]`.

### Summary:
- The `prefix: ["addresses"]` ensures that when you call `kv.list()`, you get all address-related data stored under keys that start with `["addresses"]`.
- It's a convenient way to group and retrieve all the related records in one call based on a shared key prefix.


The list() method takes two arguments selector and options:
The first list argument is a selector 

[deno list method](https://deno-blog.com/A_Comprehensive_Guide_to_Deno_KV.2023-06-30#reading-multiple-records-list--getmany)
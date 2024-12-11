# Maps and Sets

* commonly used data structure for storing and retrieving dara 

* maps contains key value pairs and set contain values that can only occur only once.

# Maps 

maps  are created using the new keyword which has a set of methods 

* set 
* get 
* has
* delete

what are maps used for:

In programming, a **Map** is a data structure that stores key-value pairs, where each key is unique. Maps are used for a variety of purposes, including:

### 1. **Storing Key-Value Pairs**
   - Maps are ideal for storing and retrieving values based on a unique key, similar to a dictionary. Each key maps to a specific value, and you can easily look up values using their corresponding keys.
   ```javascript
   let userRoles = new Map();
   userRoles.set('Alice', 'Admin');
   userRoles.set('Bob', 'User');
   console.log(userRoles.get('Alice')); // Outputs: Admin
   ```

### 2. **Efficient Data Retrieval**
   - Maps offer efficient lookups, additions, and deletions. Searching for a value in a map by its key is generally faster than searching through an array or list.

### 3. **Maintaining the Order of Insertion**
   - In most implementations, like JavaScript's `Map` object, the order of insertion is preserved. This means that when iterating over the map, elements appear in the order they were added.

### 4. **Handling Complex Keys**
   - Unlike traditional objects in JavaScript, which only accept strings or symbols as keys, maps can use any type of value (e.g., numbers, objects, functions) as a key.
   ```javascript
   let objKey = { id: 1 };
   let map = new Map();
   map.set(objKey, 'Value associated with object');
   console.log(map.get(objKey)); // Outputs: Value associated with object
   ```

### 5. **Use Cases for Maps**
   - **Caching**: Storing data that has already been computed or retrieved for quick access.
   - **Counting occurrences**: Tracking how many times each unique item appears in a collection.
   - **Configuration settings**: Storing pairs of configuration keys and their corresponding values.
   - **Associative arrays**: Acting as a more powerful version of arrays with key-based indexing.

### Comparison with Objects
   - Maps provide better performance for frequent additions and removals of key-value pairs.
   - Unlike objects, maps do not have default keys (like `toString`), so there is no risk of accidental key collisions.
   - Maps are preferred when you need keys other than strings or when you want to preserve the order of items.

In summary, maps are a versatile data structure used for associating values with unique keys, providing efficient data retrieval and manipulation capabilities.


# Sets

there two ways for creating sets using the new constructor method 

let myset =  new Set();

methods used in set 

add 
has 
delete the relevant  ones 

# Iteration

for...of loop is used to iterate over an object such as arrays strings and maps sets and more.

As key-value pair is a commonly used concept but rather tedious as a term, it is often referred to as "field"
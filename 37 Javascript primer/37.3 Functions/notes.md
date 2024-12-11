# functions 


# Learning objectives
* you know how to define and use functions.
* You know what a call stack is and how it relates to the order with which functions are executed.
* You know how function parameters are defined.
* You know how values are returned from functions.

when we create a function we define a const variable which stores a refrence to the crerated function 

which can then be called later 

the name of the variable that stores the  the anonymouse function becomes the name of the fuunction 


# Function execution order

```

const line = () => {
  console.log("------------");
};

const hello = () => {
  line();
  console.log("Hello world!");
  line();
};

hello();

````
the first function call happens at line 31 hello() this function is added to the call stack 
the application starts to execute the code of that function 

the hello() function the first line contains a call to the function line whe executing this line is addded to the call stack 

````
line()
hello()
```
on the first line of the hello() function there is console.log function call its added to the call stack 

```
console.log("------------")
line()
hello()
```

## Function parameters

if the parameter value is not passed to the function call the value of the parameter will be undifined 
in order to pass the value as parameter

## Returning a value from a function

pass a value and return a value adn excepting a value 

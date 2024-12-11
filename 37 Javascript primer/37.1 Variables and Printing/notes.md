# Variables and Printing

Learning objectives
* Knows how to define variables in JavaScript.
* Knows how to print output to the console.
* Knows what block-scoping means.
* Knows what template literals are and how to use the 

## Variables 

using let the variable value can be changed 
using const the variable value cant be changed 

in js the type of the variable is inferred automatically.

assigning a a new value to a constant variable couses an error

## blocking scoping 

block scoping means that the variables exist only within the block where they have been defined 

{
{
  const name = "B. Eich";
  console.log(name);
  {
    console.log(name);
  }
}

}


# Template literals

* This are strings into which variables values can be embedded directly. it starts and end with a backticks 
* variables are embedded directly using a dollar sign and curly brackets 
* template literal starts and ends with a back tick 



# Arrays

common data structure that are used to store data are arrays maps sets

Note that the statement const array = ["One, Two"]; is a shorthand for const
array = new Array("One", "Two"); -- in the materials, we use the shorthand
whenever possible.

array literal notation can be used to define an array

second one is by array constructor with the new keyword

# Adding and removing content

adding value os done with the push ,method at the end of an array pop at the end
of an array

shift removes the values at the the begining of the array

splice middle of an array

# Iterating over an array

for

for --of

foreach method that takes in a function

accessing an array

for(let i = 0; i < array.length; i++){ console.log(array[i][0],array[i][1])

}

for(const item of array){ console.log(item[0],item[1]); }

array.forEach((item) => { console.log(item[0],item[1]); })

//use destructuring

for(const [key ,value] of array){ console.log(key,value); }

if your dealing with an array of objects forEach

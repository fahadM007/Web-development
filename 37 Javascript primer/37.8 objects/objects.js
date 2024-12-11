// const person = {
//   name: "Alice",
//   age: 25,
//   isStudent: true
// };




// // add new property in an object

// person.status = "alive"

// person["dating name"] = "chicken";


// //console.log(person)

// //  Iterating over properties

// let array = Object.entries(person);

// //console.log(array)

// // for(let i = 0; i < array.length; i++){
// //   console.log(array[i][0],array[i][1])
 
// // }

// // for(const item of array){
// //   console.log(item[0],item[1]);
// // }

// // array.forEach((item) => {
// //   console.log(item[0],item[1]);
// // })

// //use destructuring 

// for(const [key ,value] of array){
//   console.log(`${key}: ${value}`);
// }

  

  const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  
  // Put your code here
  
  let catName = cat.name;
  cat.greeting();
  cat.color = "black";

  console.log(catName,cat.color);
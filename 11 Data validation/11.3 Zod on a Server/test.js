//if statements 


//Great! Let's break it down step by step, starting from the basics of conditional statements in JavaScript before moving on to optional chaining (?.) and nullish coalescing (??).

//Step 1: Basic if Statement
console.log("Step 1: Basic if Statement");
let age1 = 18;

if(age1 >= 18) {
  console.log("You are an adult");
}

//if age is 18 or more it will print "you are an adult "

// Step 2: if-else Statement
console.log("Step 2: if-else Statement");
let age2 = 16;

if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//Step 3: if-else if-else for Multiple Conditions
console.log("Step 3:  if-else if-else for Multiple Conditions");
let age3 = 10;

if (age3 >= 18) {
  console.log("You are an adult.");
} else if (age3 >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

//if age3 = 10 ,it prints "you are a child." because both previous conditions are false.

// Step 4: Using the Ternary Operator (? :)
console.log("Step 4: Using the Ternary Operator (? :)");
let age4 = 20;

// //use if else statement 
// if (age4 >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }
// condition ? expression_if_true : expression_if_false
//same thing using a ternary operator 
let results = age4 >= 18 ? "Adult":"Minor"
console.log(results);


// Step 5: Optional Chaining (?.) used to access properties of an object without causing an error if property is missing 

// an object with property name and value alice
let user = { name: "Alice" };

let user1 = user.name 

console.log(user1 + "no error")

let user2 = user.address

console.log(user2); // error undefined 


console.log(user?.address?.city);

let student = {
  name: "John",
  details: {
    age: 21,
    address: {
      city: "New York"
    }
  }
};

console.log(student.details?.address?.city); // "New York"
console.log(student.details?.address?.zipcode); // undefined (doesn't exist)
console.log(student.info?.email); // undefined (info doesn't exist, but no error)

let users = [{ name: "Alice" }, { name: "Bob" }];

console.log(users[0]?.name); // ✅ "Alice"
console.log(users[5]?.name); // ✅ undefined (user at index 5 doesn't exist)

let person = {
  sayHello: () => "Hello!"
};

console.log(person.sayHello?.()); // ✅ "Hello!"
console.log(person.sayGoodbye?.()); // ✅ undefined (no error)


// Step 6: Nullish Coalescing (??)
// it provides a default value when the left hand side is null or undefined 

let username = null;

//ternary operator 

let displayUser = username ? username : "Guest" ;

console.log(displayUser);

//with nullish coalescing

let displayUser2 = username ?? "Guest";

console.log(displayUser2);


// Step 7: Combining ?. and ??

let body = { email: "alice@example.com" };

console.log(body?.email ?? "No email"); // ?. it make sure we dont get an error if user is null or undefined 
console.log(body?.phone ?? "No phone"); // ?? provide a default value if the user?.phone is null or undefined 

let person1 = null;
console.log(person1?.name ?? "No Name");

let profile = { username: "" };
console.log(profile?.username ?? "Guest");


//Nullish Coalescing (??) does not replace falsy values like an empty string (""), 0, or false.

// It only replaces null or undefined.
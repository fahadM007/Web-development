// const translations = new Map();


// //set the key value pairs 
// translations.set("yksi","one")
// translations.set("kaksi", "two");
// translations.set("kolme", "three");

// //check if the following key is present 
// console.log(translations.has("neljä"));

// // set the following key 

// translations.set("neljä","four");

// //lets delete the two from the map 

// translations.delete("kaksi");

// console.log(translations.has("kaksi"));

// console.log(translations.get("kaksi"));
// console.log(translations.get("yksi"));

// console.log(translations)


const countryNames = new Map();
countryNames.set("FIN", "Finland");
countryNames.set("SWE", "Sweden");


console.log(countryNames);

// destructuring in js 

for (const [key,value] of countryNames){
  console.log(key, value)
}
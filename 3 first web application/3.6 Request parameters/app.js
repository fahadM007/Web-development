// const handleRequest = (request) =>{
//   const url = new URL(request.url);
//   const params = url.searchParams;

//   return new Response(`Name:${params.get("name")}`)

// }

// Deno.serve(handleRequest);

// Using the template code given as a part of the assignment, create an application that responds to requests made to the server so that the responses contain the values of request parameters "page" and "count". For example, when a request is made to the address `http://localhost:8000?page=2&count=5`, the response should be '2 5'. Similarly, if a request is made to the address `http://localhost:8000?page=10`, the response should be '10 null', and if a request is made to the address `http://localhost:8000?count=1`, the response should be 'null 1'. If neither page or count are in request parameters, the response should be 'null null'. When completed, test the application locally and return it here.

// {
//   const handleRequest = (request) => {
//     //value of the request parameter page and count
//     //step 1 create an object of the url from the request instance
//     const url = new URL(request.url);
//     //step 2 retrieves the searchParams property from the created url object
//     const params = url.searchParams;

//    return  new Response(`${params.get("page")} ${params.get("count")}`);
//   };

//   Deno.serve(handleRequest);
// }

// Using the template code given as a part of the assignment, create an application that can be used for starting a story. The story start should always use the form 'Once upon a time, there was a ${title} called ${name}.'. The ${title} and ${name} can be either given as request parameters, or if they are not in the request parameters, default values are used. Default value for title is 'princess' and name is 'Tove'. For example, if a request is made to the address 'http://localhost:8000?title=hero&name=Buffy', the response from the server should be 'Once upon a time, there was a hero called Buffy.'.

// Hint: The method has of the URLSearchParams object can be used to check if a request parameter is present. For example, params.has('title') returns true if the request parameters contain a parameter called 'title'.

// const handleRequest = (request) => {
//   const url = new URL(request.url);
//   const params = url.searchParams;

//   return new Response(`${params.get("page")} ${params.get("count")}`);
// };

// Deno.serve(handleRequest);

// {
//   const handleRequest = (request) => {
//     const url = new URL(request.url);
//     const params = url.searchParams;

//     const one = Number(params.get("one"));
//     const two = Number(params.get("two"));

//     return new Response(`Sum: ${one + two}`);

//   };

//   Deno.serve(handleRequest);
// }

// Using the template code given as a part of the assignment, create a calculator application. The application expects three request parameters, 'operation', 'number1', and 'number2'. Using the operation, that can be 'sum' or 'product', the calculator should respond with the operation performed on the parameters 'number1' and 'number2'. For example, if a user makes a request to the address `http://localhost:8000?operation=product&number1=2&number2=2`, the response should be '4'. Similarly, if the request is made to `http://localhost:8000?operation=sum&number1=8&number2=12`, the response should be `20`. If one of the parameters is missing, or the operation is not 'sum' or 'product', the response should be 'Invalid parameters.'. You can assume that the numbers are always given using numeric values. When completed, test the application locally and return it here.

// const handleRequest = (request) => {
//   const url = new URL(request.url);
//   const params = url.searchParams;

//   let result = "nothing";

//   if (
//     params.has("operation") && params.has("number1") && params.has("number2")
//   ) {
//     let operation = params.get("operation");
//     let number1 = Number(params.get("number1"));
//     let number2 = Number(params.get("number2"));

//     if (operation === "product") {
//       result = number1 * number2;
//     } else if (operation === "sum") {
//       result = number1 + number2;
//     }
//   }
//   if (result) {
//     return new Response(`${result}`);
//   } else {
//     return new Response("Invalid parameters.");
//   }
// };

// Deno.serve(handleRequest);


// empty file
const handleRequest = (request) => {
  const url = new URL(request.url)
  const params = url.searchParams;
  
  let message = "Not here.";
  if(request.method === "GET" && url.pathname === "/"){
     message = "Hi there!";
  }
  if (request.method === "GET" && params.has("heroOfTheDay") && url.pathname === "/congrats"){
    message = `Congrats, ${heroOfTheDay}!`;    
  }
  
  if(request.method === "DIDNOT" && url.pathname === "/lol"){
      message = "What kind of tree fits in your hand? A palm tree.";
  }

return new Response(message);
  
}

Deno.serve(handleRequest);


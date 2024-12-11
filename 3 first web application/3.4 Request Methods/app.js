// Deno.serve(function(){
//   return new Response("hello world");
// })

//first define a function

// const handleRequests = (request) => {
//   let message;
//   if (request.method === "GET") {
//     message = "Retrieving information, are you?";
//   } else if (request.method === "POST") {
//     message = "Posting information, are you?";
//   } else if (request.method === "NIGAS") {
//     message = "Magicking, are you?";
//   } else {
//     message = "I am unsure what I should do here!";
//   }
//   return new Response(message);
// };

// Deno.serve(handleRequests);

// Using the template code given as a part of the assignment, create an application that responds to requests as follows. Requests made using the 'GET' method receive a response 'Retrieving data...'. Requests made using the 'POST' method receive a response 'Posting data...'. Requests made with other request methods receive a response 'Unable to comply...'. When completed, test the application locally and return it here.

// const handleRequests = (request) => {
//   console.log(request);
 
//   let message;
//   if (request.method === "GET") {
//     message = "Retrieving data...";
//   } else if (request.method === "POST") {
//     message = "Posting data...";
//   } else {
//     message = "Unable to comply..."
//   }
//   return new Response(message);
// };

// Using the template code given as a part of the assignment, create an application that responds to requests made to the server as follows. Whenever a request is made to the server, the response must consist of the message 'You made a request with method ${method}', where ${method} corresponds to the request method that was used. For example, if the request is made with the 'GET' request method, e.g. by simply browsing to 'http://localhost:8000', the server must respond with the message 'You made a request with method GET'. Similarly, if the request method is 'POST', then the response must be 'You made a request with method POST'. When completed, test the application locally and return it here.

// Note that the application should work with other types of request methods -- even imaginary ones -- as well!



const handleRequest = (request) => {
   let message;
   if(request.method === "GET"){
    message = `You made a request with method ${request.method}`;
   } else if (request.method === "POST") {
    message = `'You made a request with method ${request.method}`
   } else {
    message = `'You made a request with method ${request.method}`
   }
  return new Response(message);
};

Deno.serve(handleRequest);









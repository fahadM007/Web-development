//combining request method and requested path

// const handleRequest = (request) => {
//   //request method
//   // lets work on the path
//   const url = new URL(request.url);
//   return new Response(`method used ${request.method} and the path name is ${url.pathname}`);
// }

// Deno.serve(handleRequest);

// Using the template code given as a part of the assignment, create an application that responds to requests made to the server as follows. Whenever a request is made to the server, the response must consist of the message '${method} request made to path ${path}', where ${method} corresponds to the request method that was used and ${path} corresponds to the path that was requested. For example, if a request is made with the 'GET' request method to the address 'http://localhost:8000/helloworld', the server must respond with the message 'GET request made to path /helloworld'. Similarly, if the request method is 'POST' and the address is 'http://localhost:8000/items', then the response must be 'POST request made to path /items'. When completed, test the application locally and return it here.

// const handleRequest = (request) => {
//   let url = new URL(request.url);
//   let  message = `${request.method} request made to path ${url.pathname}`
//   return new Response(message);
// };

// Deno.serve(handleRequest);

// Using the template code given as a part of the assignment, create an application that responds to requests as follows. Requests made using a 'PEEK' method (not part of HTTP specification) to path /secret receive a response 'Peeking at secret data...'. All other requests, regardless of method or path, receive a response 'There is nothing to see here...'. When completed, test the application locally and return it here.

const handleRequest = (request) => {
  //lets look at the pathname by constructing the url to an object
  const url = new URL(request.url);
  let message = "There is nothing to see here.."
  if (request.method === "PEEK" && url.pathname === "/secret") {
    message = "Peeking at secret data...";
  } 

  return new Response(message);
};

Deno.serve(handleRequest);



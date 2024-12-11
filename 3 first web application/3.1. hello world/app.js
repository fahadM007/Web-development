// Deno.serve(function(){
//   return new Response("hello world");
// })

//first define a function

const handleRequests = (request) => {
  //lets log the methods and the url
  console.log(request);
  console.log(`Request method ${request.method} `);
  console.log(`Request method ${request.url} `);

  return  Response("Hello World");
};

Deno.serve(handleRequests);

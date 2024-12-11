// Deno.serve(function(){
//   return new Response("hello world");
// })

//first define a function

// const handleRequests = (request) => {
//  const url = new URL(request.url);
//  let message = "hello";
//  if(url.pathname === "/hello"){
//   message = "world"
//  } else if (url.pathname.includes("secrets")){
//   message ="ingredient";
//  }
//  return new Response(message);
// };

const handleRequests = (request) => {
  //make the url into an object 
  const myUrl = new URL(request.url)
 

 let message;
 if (myUrl.pathname === "/juma"){
    message = "hello Juma"
 }

  return new Response(message);
}




Deno.serve(handleRequests);

// Request class {
//   bodyUsed: false,
//   headers: Headers { accept: "*/*", host: "0.0.0.0:8000", "user-agent": "curl/8.9.1" },
//   method: "GET",
//   redirect: undefined,
//   url: "http://0.0.0.0:8000/"
// }

// 


const http = require("http");

const server = http.createServer((request, response) => {
  console.log(`Someone has requested ${request.url}`);

  if (request.url === '/') {
    response.write('<h1>Hello, world!</h1>');
    response.end();
  } 

  if (request.url === '/about') {
    response.write('<h1>This is my about page</h1>');
    response.end();
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
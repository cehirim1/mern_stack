// console.log('Express Tutorial')

const http = require("http");
const { readFileSync } = require("fs");

//get all files only when the server loads using the readFileSync function
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeScript = readFileSync("./navbar-app/browser-app.js");

//create a server using the createServer function that takes a  callback function with res and req as parameters (objs)
const server = http.createServer((req, res) => {
  //request objects
  // console.log(req.url);
  // console.log(req.method);

  //provide metadata about the request, tell the browser what the server is sending back to the client
  //express takes care of having to change the content-type to text or json or html etc

  //html file
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //styles.css
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyles);
    res.end();
  }

  //logo.svg
  else if (req.url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }

  //js file
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(homeScript);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Oops! something went wrong!</h1>");
  }

  //res.end notifies the server that all the data has been sent and complete and must be called, data can be passed to it and res.write bypassed.
  console.log("user hit the server");
});

//invoke the server on port 5000 using the listen function
//port is a communication endpoint
//443 secure http connection
server.listen(5000);

//to serve a complete webpage, you must pass all of the files contained in the entire directory,
//we handle all requests in our createServer function by assigning files to some variable and then usiong them

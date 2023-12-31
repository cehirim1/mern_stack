const http = require("http");

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url === "/") {
    res.end("welcome to our site");
  }
  if (req.url === "/about") {
    res.end("Here is our short description");
    return;
  }

  if (req.url === "/contact") {
    res.end("Contact us");
    return;
  }

  res.end("opps! something went wrong!");
});

server.listen(5000);

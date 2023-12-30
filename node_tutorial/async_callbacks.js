const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
    return;
  }

  if (req.url === "/about") {
    //blocking code could be a nested for loop -> always setup your code asynchronously
    // for (let index = 0; index < 100; index++) {
    //  for (let element  = 0; element < 100; element++) {
    //   console.log(index, element);
    //  }

    // }
    res.end("About Page");
    return;
  }

  res.end(`Oops! something went wrong!
`);
});

server.listen(5000, () => {
  console.log("server is running on port 5000");
});

const express = require("express");
const app = express();

const { products } = require("./data"); //require data you want by destructuring the object
app.get("/", (req, res) => {
  //  res.json(products) //sends response with the correct content-type in a json format using (JSON.stringfy())

  res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
});

//set up a GET route to return all the products
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

//providing info about a specific product
//instead of hardcoding the id, we can use the find method to find the product - route parameters provided by express
app.get("/api/products/:productID", (req, res) => {
  //route params - very important
  const { productID } = req.params;
  const singleProd = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProd) {
    return res.status(404).send("<p>Product does not exist.</p>");
  }
  res.json(singleProd);
});
//reviews page
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params.product);
  res.send("Product is great");
});

//query string params - send data to server and to database
//they are not part of the url, they are part of the query string represented using ?
//they query the database and send back the data
//the user provides the search, query param as well as the limit

//we can only have one res per request, if we have multiple, we run into an error which is resolvable when we use return statements
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  //   res.json('Hello World');
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = products.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

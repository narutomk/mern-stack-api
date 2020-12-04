require("./db");
const express = require("express");
const bodyParser = require("body-parser");
var productRoutes = require("./controllers/productController");

var app = express();
app.use(bodyParser.json());

app.listen(4000, () => console.log("Server started at : 4000"));
app.use("/products", productRoutes);

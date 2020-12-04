const express = require("express");
var router = express.Router();
var { Product } = require("../models/Product");

router.get("/", (req, res) => {
  Product.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "error while retrieving all records: " +
          JSON.stringify(err, undefined, 2)
      );
  });
});
module.exports = router;

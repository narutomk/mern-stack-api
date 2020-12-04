const mongoose = require("mongoose");
var Product = mongoose.model(
  "Product",
  {
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    colors: {
      type: Array,
    },
    images: {
      type: Array,
    },
    category: {
      type: String,
    },
    brand: {
      type: String,
    },
    sizes: {
      type: Array,
    },
  },
  "product"
);

module.exports = { Product };

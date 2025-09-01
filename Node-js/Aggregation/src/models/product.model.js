const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    _id: {
      type: String, 
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      index: true, 
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Product", productSchema);

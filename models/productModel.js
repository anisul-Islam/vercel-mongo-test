const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: String,
  price: Number,
});

const Product = model('products', productSchema);
module.exports = Product;

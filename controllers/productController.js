const { default: mongoose } = require('mongoose');
const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send({
      products: products,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getPorduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .send({ message: `product was not found with this ${id}` });
    }
    res.send({
      product: product,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      return res.status(500).send({ message: 'Invalid id' });
    }
    res.status(500).send({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.send({
      products: products,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { getAllProducts, getPorduct, createProduct };

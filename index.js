const express = require('express');

const app = express();

require('dotenv').config();

app.use(express.json());

const connectDB = require('./connectMongo');
const Product = require('./models/productModel');

connectDB();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('welcome to the express server');
});

app.use('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.send({
      products: products,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

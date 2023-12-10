const express = require('express');

const app = express();

require('dotenv').config();

app.use(express.json());

const connectDB = require('./connectMongo');
const Product = require('./models/productModel');
const productRoute = require('./routes/productRoute');

connectDB();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('welcome to the express server');
});

app.use('/products', productRoute);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

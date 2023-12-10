const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('../connectMongo');
const productRoute = require('../routes/productRoute');

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('welcome to the express server');
});

app.use('/products', productRoute);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

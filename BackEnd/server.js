// Importing necessary modules
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// Initializing the express app
const app = express();
const port = 4000;

// Using CORS for handling cross-origin requests
app.use(cors());

// Setting headers to handle preflight requests and CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configuring express to use body-parser for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to MongoDB using Mongoose
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://[credentials]@cluster0.pxynhtv.mongodb.net/?retryWrites=true&w=majority');
}

// Defining a schema for the 'books' collection in MongoDB
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

// Creating a model based on the bookSchema
const bookModel = mongoose.model('books', bookSchema);

// Handling POST requests to '/name', echoing back the name
app.post('/name', (req, res) => {
  console.log("post method");
  console.log(req.body.firstname);
  res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
});

// Handling POST requests to '/api/book' for adding new books
app.post('/api/book', (req, res) => {
  console.log(req.body);
  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  })
  .then(() => { res.send("Data Received!") })
  .catch(() => { res.send("Data NOT Received!!") })
});

// Basic route to test if the server is running
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Handling GET requests to '/api/books' to fetch all books
app.get('/api/books', async (req, res) => {
  let books = await bookModel.find({});
  console.log(books);
  res.json(books);
});

// Handling GET requests to '/api/book/:id' to fetch a specific book by its ID
app.get('/api/book/:id', async (req, res) => {
  console.log(req.params.id);
  let book = await bookModel.findById({_id: req.params.id})
  res.send(book);
});

// Starting the server on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

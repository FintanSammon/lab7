const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as, middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.pxynhtv.mongodb.net/?retryWrites=true&w=majority');

}

const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
})

const bookModel = mongoose.model('books',bookSchema);

app.post('/name', (req, res) => {
console.log("post method");
console.log(req.body.firstname);
res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
})

app.post('/api/book', (req, res)=>{
console.log(req.body);

bookModel.create({
title:req.body.title,
cover:req.body.cover,
author:req.body.author

})
.then(
  ()=>{res.send("Data Received!")}
)
.catch(
  ()=>{res.send("Data NOT Received!!")}
)


})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/books', async (req, res)=>{

let books = await bookModel.find({});
console.log(books);
res.json(books);

})

app.get('/api/book/:id' ,async (req,res)=>{
  console.log(req.params.id);
  let book = await bookModel.findById({_id:req.params.id})
  res.send(book);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
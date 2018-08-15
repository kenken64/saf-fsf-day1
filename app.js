// import express library
const express = require('express');

// instantiation
var app = express();

app.get('/', (req, res)=>{
    res.send('Hello World fdsfdsfds2');
});

app.listen(1337, ()=>{
    console.log('Server is running at localhost:1337');
});
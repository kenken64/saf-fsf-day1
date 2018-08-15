var x  = 1;

function make(isOk, make2){
    //let x = 2;
    console.log(x);
    console.log(isOk);
    make2();
}

function make2(){
    //let x = 2;
    console.log(x);
}

let isOk = false
make(isOk, make2);
//make2();

// // import to include http module
// const http = require('http')

// // create a webserver
// http.createServer(function ( req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n')
// }).listen(1337, '127.0.0.1');

// console.log('Server is running at 127.0.0.1:1337');

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

var y = null;
console.log(y);

var weight = 30.3;
var isOk = true;
var fruits = ['Apple', 'Orange'];

function howAreYou(){

}
console.log(typeof(fruits))

var x = 0;

x = 5;
console.log(x);

var x =  ['Apple', 10 , '%', true, 5];

console.log(typeof (x[1]));

function isUnderage(){
    console.log("I am function !");
}
var person = {
    age: 20,
    'is he ok': true,
    isUnderage: isUnderage
}
console.log("--------------");
console.log(person);
console.log(typeof(person.isUnderage));
console.log(person.age);
console.log(person['is he ok']);
console.log("--------------");
person = {}
console.log(person);

var yy = [2, 1, 3]
yy.push(4);
console.log(yy);
yy.pop();
console.log(yy);
yy.unshift(1);
console.log(yy);
yy.shift();
console.log(yy);
var newyy = yy.join(', ');
console.log(newyy);
yy.sort();
console.log(yy);
console.log(x.sort());

var person = {
    age : 20,
    first_name : "Kenneth"
}

function test(){
    return person;
}

p = test();
console.log(p.age);

function say(value){
    console.log("Hello, " + value);
}

function you(){
    console.log('me');
}

function execute(someFunction, value){
    someFunction(value)
}
//say('Hello');
execute(function(){
    console.log("Hello, ");
}, 'Kenneth');


(
    function test(){
        console.log("I am a IIFE !");
    }
)();

var f1 = function nameMe(){
    console.log('Hello me !')
};
var f2 = f1;

var f3 = function(){
    console.log("Anonymous!");
}
f1();
f2();
f3();

function foo1(){
    console.log('Hello c Foo1');
}

function foo2(){
    console.log('Hello Foo1');
}

setTimeout(foo2, 2000);
setTimeout(foo1, 2000);

function incrementByOne(value){
    let value2 = value;
    return function(){
        console.log(value2 + 1);
    }
}

var t = incrementByOne(4);
t();

function a(){
    throw new Error('An error !');
}

try{
    a();
}catch(e){
    console.log(e.message);
}finally{
    console.log('finally');
}

var x = 3;
var y = '4';

if(x > 4){
    console.log("More than 4");
}else{
    console.log("Less than 4");
}

if(y === 4){
    console.log("Hi 4 here!!");
}

var x = 2;

switch(x){
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    default: 
        console.log('3');
}

var i = 5;
while(i < 10){
    i++;
    console.log("while loop +++ " + i);
}

// var i = 7;
// do {
//   console.log("do while +++ " + i);
// } while(i < 10)

for (var i = 0; i < x.length; i++){
    console.log(x[i]);
    if(x[i] == 3){
        break;
    }
}
console.log("-------------------");
x.forEach(function(value, idx){
    console.log(idx);
    console.log(value);
    /* cannot have break statement in forEach
    if(x[i] == 3){
        break;
    }*/ 
})

// var x = [ 1, 2, 3, 4, 5];

// console.log(x.indexOf(3));

// y = x.slice(1,4);
// console.log(y);

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// //console.log(animals.slice(2));
// //console.log(animals.slice(2, 4));
// console.log(animals.splice(1,1));
var months = ['Jan', 'March', 'April', 'June', 'July', 'August', 'Sep'];
// index , deleteCount , value
months.splice(4, 2, 'May', 'Feb');
console.log(months);
//[ 'Jan', 'March', 'April', 'June', 'May', 'Sep' ]
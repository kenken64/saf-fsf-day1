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
var Person4 = require('./person');
//import { Person4 } from "./person";

var p = new Person4('test1', 'test2', 30);
console.log(p);
console.log(global.g_middleName);
console.log(this.g_middleName);
var g_middleName = 'Noman'
console.log(g_middleName);

x.then(function(result){
    let xName = result.name;
    y.then(function(result2){
        console.log(xName)
    });
});
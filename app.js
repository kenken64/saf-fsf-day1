var Person4 = require('./person')
function sayHi(){
    console.log('hi');
}
var Person = {
    first_name: 'Kenneth',
    last_name: 'Phang',
    age: 20,
    func1: sayHi
}

var p = Person;
console.log(Person);
Person.salary = 2000;
console.log(Person);
delete Person.age;
console.log(Person);
var xFunc = Person.func1;
xFunc();
function Person2(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

function Person3(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}


var p2 = new Person2('Kenneth', 'Phang', 30);
var p4 = new Person4('Kenneth', 'Phang', 30);

console.log(p2 instanceof Person4);
console.log(p4 instanceof Person4);
console.log(p4.getFirstName());
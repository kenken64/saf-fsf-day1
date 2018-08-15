global.g_middleName = "Man";

class Person4 {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
         this.age = age;
    }

    getFirstName(){
        return this.firstName;
    }
}

module.exports = Person4;
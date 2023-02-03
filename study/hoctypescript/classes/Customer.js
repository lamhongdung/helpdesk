var Hello = /** @class */ (function () {
    function Hello(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
        if (lastName)
            console.log('Hello ' + this.firstName + ' ' + this.lastName);
        else
            console.log('Hello ' + this.firstName);
    }
    return Hello;
}());
// Creating an object h1
var h1 = new Hello('Shivam');
// Creating an object h2
var h2 = new Hello('Shivam', 'Gupta');
console.log(h1);

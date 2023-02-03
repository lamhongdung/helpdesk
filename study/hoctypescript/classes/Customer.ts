
class Hello{
  
    constructor(private firstName: string, private lastName?: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        if (lastName)
            console.log('Hello ' + this.firstName + ' ' + this.lastName);
        else
            console.log('Hello ' + this.firstName);
    }
}
 
// Creating an object h1
let h1 = new Hello('Shivam'); 
  
// Creating an object h2
let h2 = new Hello('Shivam', 'Gupta');

// Creating an object h2
let h3 = new Hello();

console.log(h1);
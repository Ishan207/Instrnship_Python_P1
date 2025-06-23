/* 
What is the null in JavaScript?
Null is an object in JavaScript and represents 
primitive data types. A null value in JavaScript is
used for referring absence of any object value and 
if any function or variable returns null,
then we can infer that the object could not be created.

*/

let myvar = null;
console.log(myvar); // null
console.log(typeof myvar,myvar); // object , null

myvar = "uadasfa";
console.log(typeof myvar,myvar); // string, null

let mynull = null;
console.log(typeof mynull); // object 
// bug , error

/* 
Why is null type an object?
The reasoning behind this is that null , 
in contrast with undefined , was (and still is) often
used where objects appear. In other words, null is often
used to signify an empty reference to an object.

 When Brendan Eich created JavaScript, 
he followed the same paradigm, and it made sense (arguably)
to return "object" .


*/

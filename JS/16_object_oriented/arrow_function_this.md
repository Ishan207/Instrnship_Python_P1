## arrow function using this keyword
> Arrow function consider this keyword of one scope ahead


> Use of 'this' in Arrow Function Methods
- A regular function will always define its this value. The this keyword is handled 
 differently by arrow functions. Since it lacks a context of its own, they are unable
 to define its own. Anytime you call this, they take the value of this from the parent
 scope.
- As mentioned earlier, the arrow function doesn't have its own this value. 
- It uses the this value of the enclosing lexical scope.

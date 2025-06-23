// #################### BigInt ################

let mynum = 123;

console.log(mynum);
console.log(Number.MAX_SAFE_INTEGER);

// declaring big int
let num = BigInt(315);
let num1 = 123n;
console.log(num);
console.log(num + num1);
let num3 = 1245;
console.log(num + num3);//  invalid
// error cannot mix bigint with other types.

/* 
 BigInt is a built-in object in JavaScript that provides 
a way to represent whole numbers larger than 2^53-1.
 The largest number that JavaScript can reliably 
 represent with the Number primitive is 2^53-1,
 which is represented by the MAX_SAFE_INTEGER constant.
*/

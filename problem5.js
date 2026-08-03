//** Swap **
//Swap using temporary variable
let a = 5;
let b = 10;

const tepm = a;
a = b
b = tepm
console.log(a,b)

//Swap using destructing method
let x = 35;
let  y = 40;
[x , y] = [y , x]
console.log(x,y)
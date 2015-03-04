var a = 4;
var b = -10;

console.log(a, b);

a = b - a;
b = b - a;
a = a + b;

console.log(a, b);
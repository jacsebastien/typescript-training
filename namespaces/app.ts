/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle;
 
// We can create a new one and with anoter type because it's not in the same namespace
const PI = "3.14";

console.log(MyMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircumference(3));
console.log(PI);
"use strict";
console.log("Hello World !");
// tuple type
var address = ["Mystreet", 99];
// let address: [string, number] = ["Mystreet"]; // Nope
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Purple"] = 3] = "Purple"; // 3
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log(myColor); // 1
// basic functions
function sayHello() {
    console.log("Hello");
}
function multiply(val1, val2) {
    return val1 * val2;
}
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 5));
// complet object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealAge = 27;
myRealAge = "27 years old";
// myRealAge = true;
// check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
else {
    console.log("Final value is not a number");
}
// never
// function that never returns anything (not the same than "void")
function neverReturns() {
    throw new Error('An error !');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull; // null
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;

console.log("Hello World !");

// tuple type
let address: [string, number] = ["Mystreet", 99];
// let address: [string, number] = ["Mystreet"]; // Nope

// enum
enum Color {
    Gray,   // 0
    Green = 100,  // 100
    Blue,    // 101
    Red = 2,    // 2
    Purple  // 3
};
let myColor: Color = Color.Green;
console.log(myColor); // 1

// basic functions
function sayHello(): void {
    console.log("Hello");
}

function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 5));

// complet object
let complex: {data: number[], output: (a: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

// type alias
type Complex = {data: number[], output: (a: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealAge: number | string = 27;
myRealAge = "27 years old";
// myRealAge = true;

// check types
let finalValue = "A string";
if(typeof finalValue == "number") {
    console.log("Final value is a number");
} else {
    console.log("Final value is not a number");
}

// never
// function that never returns anything (not the same than "void")
function neverReturns(): never {
    throw new Error('An error !');
}
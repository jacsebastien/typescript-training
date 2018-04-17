// Simple Generic
function echo(data: any) {
    return data;
}

// No errors because typescript does not know about the parameter type
// console.log(echo("Seb").length);    // 3
// console.log(echo(27).length);   //undefined
// console.log(echo({name: "Max", age: 27}).length); // undefined

// Better Generic
// <T> tells typscript to give us the type of data passed for argument to be allowed to use it
// WIth that we can pass any type, typescript now which one it is and can manage it
function betterEcho<T>(data: T) {
    return data;
}

// console.log(betterEcho("Seb").length);  // 3
// console.log(betterEcho(27).length);     // Error : 27 is a number
// console.log(betterEcho(27));
// console.log(betterEcho<number>("Seb"));  // Error: string >< number
// console.log(betterEcho({name: "Max", age: 27}));

// Arrays
function printAll<T>(args: T[]) {
    args.forEach(element => console.log(element));
}

// printAll<string>(["Apple", "Banana"]);

// Generic Types
// echo2 is type of a generic function which returns it's entry (like betterEcho) and we assign it betterEcho
const echo2: <T>(data: T) => T = betterEcho;
// console.log(echo2<string>("Something"));

// Generic Class
// use a generic type and extends it to control which value can be passed
class SimpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        // cast to number before returning result
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());

// const simpleMathBool = new SimpleMath<boolean>();  // won't work
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
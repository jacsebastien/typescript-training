// Destructuring
// Arrays
const myHobbies = ["Music", "Video Games"];
const [hobby1, hobby2] = myHobbies;
console.log("myHobbies: ", hobby1, hobby2);

// Objects
const userData = {userName: "sja", age: "28"};
// const {userName, age} = userData;
// console.log("userData: ", userName, age);
const {userName: myName, age: myAge} = userData;
console.log("userData: ", myName, myAge);
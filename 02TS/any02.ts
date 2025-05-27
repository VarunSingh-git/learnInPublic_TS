// ----------- any -----------
// 'any' disables TypeScript's type checking for a variable.
// A variable of type 'any' can hold any data type.

let firstVar: any;
firstVar = 5;
firstVar = "hello";
firstVar = true;

// Another way to declare 'any' implicitly:
let secondVar; // Implicitly has type 'any'
secondVar = "string";
secondVar = 12;
secondVar = true;

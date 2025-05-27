// ----------- unknown -----------
// 'unknown' is similar to 'any' but safer.
// We can't directly assign 'unknown' to another type without checking.

let type1: any;
type1 = 5;
let num1: number;
num1 = type1; // No error, but unsafe — drawback of 'any'
let type2: unknown;
type2 = 5;
let num2: number;
// num2 = type2; Error — cannot assign 'unknown' directly

// Safe way using type checking
let type3: unknown;
type3 = 5;

let num3: number;
if (typeof type3 === "number") {
  console.log(type3 === 5); // true
  num3 = type3; // Safe assignment after type check
}






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

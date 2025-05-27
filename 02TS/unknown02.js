// ----------- unknown -----------
// 'unknown' is similar to 'any' but safer.
// We can't directly assign 'unknown' to another type without checking.
var type1;
type1 = 5;
var num1;
num1 = type1; // No error, but unsafe — drawback of 'any'
var type2;
type2 = 5;
var num2;
// num2 = type2; Error — cannot assign 'unknown' directly
// Safe way using type checking
var type3;
type3 = 5;
var num3;
if (typeof type3 === "number") {
    console.log(type3 === 5); // true
    num3 = type3; // Safe assignment after type check
}

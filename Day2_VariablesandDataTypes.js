/* 
What Are Variables?

Variables are used to store data. In JavaScript, variables can hold different types of data, such as numbers, strings, or objects.

Declaring Variables:

JavaScript provides three ways to declare variables:

var: Function-scoped, can be redeclared.

let: Block-scoped, cannot be redeclared within the same scope.

const: Block-scoped, constant values.

Data Types:

Primitive Types:

String: Text (e.g., "Hello")

Number: Integer or decimal (e.g., 42, 3.14)

Boolean: true or false

Undefined: Variable declared but not assigned

Null: Intentional empty value

Symbol: Unique identifiers (used rarely)

Non-Primitive Types:

Objects: Collections of key-value pairs

Arrays: Lists of values
 */

// ভেরিয়েবল ডিক্লেয়ার করার উদাহরণ
let name = "Rahim"; // স্ট্রিং
const age = 25;     // সংখ্যা
var isStudent = true; // বুলিয়ান

console.log(name);   // আউটপুট: Rahim
console.log(age);    // আউটপুট: 25
console.log(isStudent); // আউটপুট: true

// ডেটা টাইপ চেক করতে typeof ব্যবহার করুন:
console.log(typeof age); // আউটপুট: number

// "name" একটি স্ট্রিং, যার মান "Rahim"।
// "age" একটি সংখ্যা, যার মান ২৫।
// "isStudent" একটি বুলিয়ান, যা সত্য হলে true এবং মিথ্যা হলে false
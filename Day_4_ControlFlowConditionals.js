/* 

Introduction to Control Flow:
=> Control flow determines the order in which code is executed. In JavaScript, control flow allows us to make decisions using conditionals. This is crucial for executing specific blocks of code based on certain conditions, making programs dynamic and interactive.


Conditional Statements:
if Statement: The if statement is used to execute a block of code if a specified condition evaluates to true.
1. 
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

2. 
if-else Statement:
The if-else statement adds an alternative block of code to run if the condition is false.
let age = 15;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

3. if-else if-else Ladder:
The if-else if-else structure handles multiple conditions sequentially.
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else {
  console.log("Grade: B");
}

4. Switch Statement:
The switch statement is an alternative to multiple if-else blocks. It evaluates an expression against multiple cases.
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


Additional Explanation:

Nested Conditionals: Conditions can be nested within each other for complex decision-making.
let score = 75;
if (score >= 50) {
  if (score >= 80) {
    console.log("Excellent");
  } else {
    console.log("Good");
  }
} else {
  console.log("Needs Improvement");
}

// if স্টেটমেন্ট শর্ত চেক করে।
// switch স্টেটমেন্ট একাধিক কেস চেক করতে ব্যবহৃত হয়।
// নেস্টেড কন্ডিশনাল ব্যবহার করলে জটিল শর্ত পরিচালনা করা সহজ হয়।
*/
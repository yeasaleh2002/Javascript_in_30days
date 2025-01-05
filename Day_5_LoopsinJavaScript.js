/* 
Types of Loops:
Loops allow repetitive tasks to be performed efficiently.

1. for Loop:
The for loop is ideal when the number of iterations is known.
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

2. while Loop:
The while loop runs as long as a specified condition is true.

let i = 0;
while (i < 5) {
  console.log("Iteration: " + i);
  i++;
}

3. do-while Loop:
The do-while loop executes its block at least once before checking the condition.
let i = 0;
do {
  console.log("Iteration: " + i);
  i++;
} while (i < 5);

4. for-in Loop (for Objects):
The for-in loop iterates over the keys of an object.

let person = { name: "Rahim", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

5. for-of Loop (for Arrays):
The for-of loop iterates over values in an iterable, such as arrays.
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

Additional Explanation:
Break and Continue:
The break statement exits a loop prematurely, and the continue statement skips the current iteration and proceeds to the next.
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  if (i % 2 === 0) continue;
  console.log(i);
}

/ for লুপ পুনরাবৃত্তি করার জন্য ব্যবহৃত হয়।
// while লুপ নির্দিষ্ট শর্ত পূরণ হওয়া পর্যন্ত চলে।
// break এবং continue লুপের প্রবাহ নিয়ন্ত্রণ করতে ব্যবহৃত হয়।
 */

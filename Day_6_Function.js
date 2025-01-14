### Day 6: Functions in JavaScript

#### 1. **What is a Function?**
   - **English:** A function is a block of code that performs a specific task. It can be called/invoked to execute the code inside it.
   - **Bangla:** একটি ফাংশন হল কোডের একটি ব্লক যা একটি নির্দিষ্ট কাজ সম্পাদন করে। এটি কল/ইভোক করা যেতে পারে কোডটি কার্যকর করার জন্য।

   - **Use Case:** Functions are used when you want to reuse code multiple times in your program without repeating it. For example, if you have a task that calculates the area of a rectangle, you can use a function for that task.

   - **Code Example:**
     ```javascript
     function calculateArea(length, width) {
         return length * width;
     }

     console.log(calculateArea(5, 3));  // Output: 15
     ```

---

#### 2. **Function Declaration**
   - **English:** This is the most common way to define a function. You declare it using the `function` keyword followed by the function name, parameters, and the body of the function.
   - **Bangla:** এটি একটি ফাংশন ডিফাইন করার সবচেয়ে সাধারণ উপায়। আপনি `function` কিওয়ার্ড ব্যবহার করে ফাংশনটি ঘোষণা করেন, তারপরে ফাংশন নাম, প্যারামিটার এবং ফাংশনের শরীর।

   - **Use Case:** Use function declarations when you need a reusable block of code that can be called multiple times from anywhere in your program.

   - **Code Example:**
     ```javascript
     function greet(name) {
         console.log("Hello, " + name);
     }

     greet("John");  // Output: Hello, John
     ```

---

#### 3. **Function Expression**
   - **English:** A function expression involves assigning a function to a variable. The function can be anonymous (without a name) or named.
   - **Bangla:** একটি ফাংশন এক্সপ্রেশন হল একটি ভ্যারিয়েবলে একটি ফাংশন অ্যাসাইন করা। ফাংশনটি অ্যানোনিমাস (নাম ছাড়া) বা নামকৃত হতে পারে।

   - **Use Case:** Function expressions are useful when you want to pass a function as an argument to another function or if you only need the function temporarily.

   - **Code Example:**
     ```javascript
     const sayHi = function(name) {
         console.log("Hi, " + name);
     };

     sayHi("Alice");  // Output: Hi, Alice
     ```

---

#### 4. **Arrow Functions**
   - **English:** Arrow functions are a shorthand for writing functions in JavaScript. They are often used for writing concise functions that do not need a function name.
   - **Bangla:** অ্যারো ফাংশনগুলি জাভাস্ক্রিপ্টে ফাংশন লেখার জন্য একটি সংক্ষিপ্ত পদ্ধতি। এগুলি প্রায়শই এমন ছোট ফাংশন লেখার জন্য ব্যবহার করা হয় যেগুলির ফাংশন নামের প্রয়োজন নেই।

   - **Use Case:** Use arrow functions when you want to write small functions, especially when they will be used as arguments to other functions or callbacks.

   - **Code Example:**
     ```javascript
     const add = (a, b) => a + b;

     console.log(add(2, 3));  // Output: 5
     ```

---

#### 5. **Parameters vs Arguments**
   - **English:** Parameters are the named variables that are used in the function definition. Arguments are the actual values passed to the function when it is called.
   - **Bangla:** প্যারামিটারগুলি হল নামকৃত ভ্যারিয়েবলগুলি যা ফাংশন ডিফিনিশনে ব্যবহৃত হয়। আর্গুমেন্টগুলি হল আসল মান যা ফাংশন কল করার সময় পাস করা হয়।

   - **Use Case:** Parameters define what inputs the function expects, while arguments are the actual values you pass when calling the function.

   - **Code Example:**
     ```javascript
     function multiply(a, b) {
         return a * b;
     }

     console.log(multiply(4, 5));  // Output: 20
     ```

---

#### 6. **Return Statement**
   - **English:** The `return` statement is used to exit a function and optionally return a value.
   - **Bangla:** `return` স্টেটমেন্টটি একটি ফাংশন থেকে বেরিয়ে আসার জন্য এবং ঐচ্ছিকভাবে একটি মান ফেরত দেওয়ার জন্য ব্যবহৃত হয়।

   - **Use Case:** Return is used when you want the function to provide a value as output. This value can be used elsewhere in the program.

   - **Code Example:**
     ```javascript
     function square(x) {
         return x * x;
     }

     let result = square(4);  // result = 16
     console.log(result);  // Output: 16
     ```

---

#### 7. **Function Scope**
   - **English:** Scope refers to the visibility and accessibility of variables. Variables declared inside a function are not accessible outside of it (local scope).
   - **Bangla:** স্কোপ বলতে ভ্যারিয়েবলগুলির দৃশ্যমানতা এবং অ্যাক্সেসযোগ্যতা বোঝানো হয়। একটি ফাংশনের ভিতরে ডিক্লেয়ার করা ভ্যারিয়েবলগুলি তার বাইরের পরিবেশে অ্যাক্সেসযোগ্য নয় (লোকাল স্কোপ)।

   - **Use Case:** Use function scope to limit the scope of variables, preventing naming conflicts or accidental modifications.

   - **Code Example:**
     ```javascript
     function testScope() {
         let inside = "I am inside the function";
         console.log(inside);  // Accessible here
     }

     // console.log(inside);  // Error: inside is not defined
     ```

---

#### 8. **Nested Functions**
   - **English:** A function can be defined inside another function. The inner function can access the variables of the outer function.
   - **Bangla:** একটি ফাংশন আরেকটি ফাংশনের ভিতরে ডিফাইন করা যেতে পারে। অভ্যন্তরীণ ফাংশনটি বাইরের ফাংশনের ভ্যারিয়েবলগুলিতে অ্যাক্সেস করতে পারে।

   - **Use Case:** Use nested functions when you need to perform a task within a function and need to use values from the outer function.

   // Code Example:
     function outer() {
         let outerVar = "Outer variable";

         function inner() {
             console.log(outerVar);  // Accesses outerVar
         }

         inner();
     }

     outer();  // Output: Outer variable

  // 9. Anonymous Functions 
   // English: Anonymous functions are functions without a name, often used as arguments to other functions or as callbacks.
   // Bangla: অ্যানোনিমাস ফাংশনগুলি নামহীন ফাংশন, যা প্রায়শই অন্য ফাংশনের আর্গুমেন্ট হিসেবে বা কলব্যাক হিসেবে ব্যবহৃত হয়।

   // Use Case: Use anonymous functions when you need to pass a function temporarily, and don’t need to refer to it by name elsewhere.

   // Code Example: 
     setTimeout(function() {
         console.log("This is an anonymous function");
     }, 1000);


// 10. Higher-Order Functions
   // English: Higher-order functions are functions that take other functions as arguments or return functions as results.
   // Bangla: হায়ার-অর্ডার ফাংশনগুলি হল এমন ফাংশন যা অন্য ফাংশনকে আর্গুমেন্ট হিসেবে নেয় বা ফাংশনকে ফলস্বরূপ ফেরত দেয়।

   // Use Case: Higher-order functions are useful for composing complex operations by passing in functions as arguments.

   // Code Example:
     function operate(a, b, operation) {
         return operation(a, b);
     }

     const sum = (a, b) => a + b;
     console.log(operate(5, 3, sum));  // Output: 8
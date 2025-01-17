// Day 7: Arrays in JavaScript

// #### 1. **What is an Array?**
  //  - **English:** An array is a special type of object in JavaScript that allows you to store multiple values in a single variable. It can hold values of different data types such as numbers, strings, objects, or even other arrays.
  //  - **Bangla:** একটি অ্যারে হল জাভাস্ক্রিপ্টের একটি বিশেষ ধরণের অবজেক্ট যা আপনাকে একটি ভ্যারিয়েবলে একাধিক মান সংরক্ষণ করতে দেয়। এটি বিভিন্ন ডেটা টাইপের মান ধারণ করতে পারে যেমন সংখ্যা, স্ট্রিং, অবজেক্ট বা এমনকি অন্য অ্যারে।

  //  - **Use Case:** Arrays are used when you need to store a collection of items that can be accessed by index. For example, storing a list of student names or a set of products.

  //  - **Code Example:**
    //  ```javascript
     let fruits = ["apple", "banana", "orange"];
     console.log(fruits[1]);  // Output: banana
  

// #### 2. **Array Declaration**
  //  - **English:** You can declare an array in JavaScript using square brackets (`[]`) and separate values with commas.
  //  - **Bangla:** আপনি জাভাস্ক্রিপ্টে একটি অ্যারে ডিক্লেয়ার করতে পারেন কোণের ব্র্যাকেট (`[]`) ব্যবহার করে এবং মানগুলি কমা দ্বারা আলাদা করে।

  //  - **Use Case:** Use array declarations when you need to initialize a list of items at the beginning of your program.

  //  - **Code Example:**
     let numbers = [1, 2, 3, 4, 5];
     console.log(numbers);  // Output: [1, 2, 3, 4, 5]

// #### 3. **Accessing Array Elements**
  //  - **English:** You can access individual elements of an array using an index. Arrays are zero-indexed, meaning the first element is at index 0.
  //  - **Bangla:** আপনি একটি অ্যারের পৃথক উপাদান অ্যাক্সেস করতে পারেন একটি ইনডেক্স ব্যবহার করে। অ্যারে গুলি জিরো-ইনডেক্সড হয়, এর মানে হল প্রথম উপাদানটি ইনডেক্স 0 এ থাকে।
  //  - **Use Case:** Use indexing when you need to access specific elements in an array, such as retrieving the first or last element.
  //  - **Code Example:

     let colors = ["red", "green", "blue"];
     console.log(colors[0]);  // Output: red
     console.log(colors[2]);  // Output: blue

// #### 4. **Array Length**
  //  - **English:** The `length` property returns the number of elements in an array.
  //  - **Bangla:** `length` প্রপার্টি একটি অ্যারের উপাদানগুলির সংখ্যা রিটার্ন করে।

  //  - **Use Case:** Use the `length` property when you need to know the size of an array, especially when you want to iterate through all its elements.

  //  Code Example:
     let languages = ["English", "Spanish", "French"];
     console.log(languages.length);  // Output: 3

// #### 5. **Array Methods**
  //  - **English:** JavaScript provides many built-in array methods that help manipulate or work with arrays. Some common ones are:
    //  - `.push()` - Adds an item to the end of an array.
    //  - `.pop()` - Removes the last item from an array.
    //  - `.shift()` - Removes the first item from an array.
    //  - `.unshift()` - Adds an item to the beginning of an array.
  //  - **Bangla:** জাভাস্ক্রিপ্ট অনেক বিল্ট-ইন অ্যারে মেথড সরবরাহ করে যা অ্যারের সাথে কাজ করতে বা তা পরিবর্তন করতে সহায়ক। কিছু সাধারণ মেথড হল:
    //  - `.push()` - একটি আইটেম অ্যারের শেষে যোগ করে।
    //  - `.pop()` - একটি আইটেম অ্যারের শেষ থেকে সরিয়ে দেয়।
    //  - `.shift()` - একটি আইটেম অ্যারের প্রথম থেকে সরিয়ে দেয়।
    //  - `.unshift()` - একটি আইটেম অ্যারের শুরুর দিকে যোগ করে।

  //  - **Use Case:** These methods are essential for adding, removing, and modifying elements in an array dynamically.

    // Code Example:
     let cars = ["Toyota", "Honda"];
     cars.push("BMW");  // Adds "BMW" to the end
     console.log(cars);  // Output: ["Toyota", "Honda", "BMW"]

     cars.pop();  // Removes "BMW"
     console.log(cars);  // Output: ["Toyota", "Honda"]
   

// #### 6. **Array Iteration**
  //  - **English:** You can iterate over the elements of an array using loops like `for`, `forEach`, or `map`.
  //  - **Bangla:** আপনি `for`, `forEach`, বা `map` এর মতো লুপ ব্যবহার করে একটি অ্যারের উপাদানগুলি পুনরাবৃত্তি করতে পারেন।

  //  - **Use Case:** Iterating over arrays is useful when you need to perform the same operation on each element, such as displaying all items in a list or calculating the sum of all numbers.

  //  Code Example (forEach):
     let numbers = [1, 2, 3, 4, 5];
     numbers.forEach(function(number) {
         console.log(number * 2);  // Output: 2, 4, 6, 8, 10
     });

  //  - **Code Example (map):**
  
     let doubled = numbers.map(function(number) {
         return number * 2;
     });
     console.log(doubled);  // Output: [2, 4, 6, 8, 10]

#### 7. **Multi-dimensional Arrays**
   - **English:** An array can contain other arrays, which makes it a multi-dimensional array.
   - **Bangla:** একটি অ্যারে অন্য অ্যারে ধারণ করতে পারে, যার ফলে এটি একটি বহু-মাত্রিক অ্যারে হয়ে ওঠে।

   - **Use Case:** Use multi-dimensional arrays when you need to represent matrices or a table-like structure (e.g., a seating arrangement).

   - **Code Example:**
     ```javascript
     let matrix = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]
     ];

     console.log(matrix[1][1]);  // Output: 5
     ```

---

  /* 8. Array Destructuring
   English: Array destructuring allows you to unpack values from an array into separate variables.
   Bangla: অ্যারে ডিস্ট্রাকচারিং আপনাকে একটি অ্যারের মানগুলো আলাদা ভ্যারিয়েবলে আনপ্যাক করার সুযোগ দেয়।

   Use Case: Use array destructuring when you want to easily extract values from an array and assign them to variables. */

   // Code Example:
     let fruits = ["apple", "banana", "cherry"];
     let [first, second] = fruits;
     console.log(first);  // Output: apple
     console.log(second);  // Output: banana
    
  /* // 9. Finding Elements in an Array
    // English: You can find elements in an array using methods like `.find()`, `.indexOf()`, and `.includes()`.
   // Bangla: আপনি `.find()`, `.indexOf()`, এবং `.includes()` এর মতো মেথড ব্যবহার করে একটি অ্যারের উপাদান খুঁজে পেতে পারেন।

   // Use Case: These methods are used to search for elements within an array, useful when you need to check if an item exists or to locate it. */

   // Code Example (find): 
     let numbers = [1, 2, 3, 4, 5];
     let found = numbers.find(function(num) {
         return num > 3;
     });
     console.log(found);  // Output: 4
    
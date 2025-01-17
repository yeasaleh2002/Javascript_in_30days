### **Day 13-14: Advanced Array Methods (map, filter, reduce)**

#### **What are Array Methods?**

**In English:**
Array methods in JavaScript are functions that are built into the JavaScript array prototype. These methods allow you to manipulate arrays easily, such as iterating over elements, filtering elements, transforming data, and reducing data to a single value.

**In Bengali:**
JavaScript-এ অ্যারে মেথডগুলি হল এমন ফাংশনগুলি যা JavaScript অ্যারে প্রোটোটাইপে অন্তর্ভুক্ত থাকে। এই মেথডগুলি আপনাকে অ্যারে ম্যানিপুলেট করতে সহায়তা করে, যেমন উপাদানগুলির উপর ইটারেট করা, উপাদানগুলি ফিল্টার করা, ডেটা রূপান্তর করা, এবং ডেটাকে একটি একক মানে রিডিউস করা।

---

### **1. `map()` Method**

**In English:**
The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array but returns a new array with transformed values.

**Syntax:**
```javascript
let newArray = array.map(function(element) {
    return element * 2; // Example operation
});
```

**Example:**
```javascript
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

**In Bengali:**
`map()` মেথডটি একটি নতুন অ্যারে তৈরি করে যা কল করার সময় প্রতিটি উপাদানের উপর একটি প্রদত্ত ফাংশন কল করার ফলাফলে পূর্ণ হয়। এটি মূল অ্যারেটিকে পরিবর্তন করে না বরং রূপান্তরিত মানগুলির সাথে একটি নতুন অ্যারে প্রদান করে।

**উদাহরণ:**
```javascript
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // আউটপুট: [2, 4, 6, 8, 10]
```

**Use Case:**
You can use `map()` to perform operations on each element of an array and create a new array based on the results without modifying the original array. For example, transforming data from one format to another.

---

### **2. `filter()` Method**

**In English:**
The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. It does not change the original array but returns a new array with the elements that satisfy the given condition.

**Syntax:**
```javascript
let newArray = array.filter(function(element) {
    return element > 5; // Example condition
});
```

**Example:**
```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let greaterThanThree = numbers.filter(number => number > 3);
console.log(greaterThanThree); // Output: [4, 5, 6]
```

// **In Bengali:**
// `filter()` মেথডটি একটি নতুন অ্যারে তৈরি করে যা সমস্ত উপাদান ধারণ করে যেগুলি প্রদত্ত ফাংশন দ্বারা পরীক্ষিত শর্ত পূর্ণ করে। এটি মূল অ্যারেটিকে পরিবর্তন করে না, বরং এমন উপাদানগুলির সাথে একটি নতুন অ্যারে প্রদান করে যা নির্ধারিত শর্ত পূর্ণ করে।

// **উদাহরণ:**
let numbers = [1, 2, 3, 4, 5, 6];
let greaterThanThree = numbers.filter(number => number > 3);
console.log(greaterThanThree); // আউটপুট: [4, 5, 6]

// **Use Case:**
// You can use `filter()` to extract specific elements from an array based on a given condition. For example, filtering out even or odd numbers, or removing objects that do not match a specific criterion.

// ### **3. `reduce()` Method**

// **In English:**
// The `reduce()` method executes a reducer function (provided by the user) on each element in the array, resulting in a single output value. It is often used for calculating sums, products, or reducing an array to a single value based on custom logic.

// **Syntax:**
let result = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; // Example operation
}, initialValue);


// **Example:**
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

**In Bengali:**
// `reduce()` মেথডটি একটি রিডিউসার ফাংশন (যা ব্যবহারকারী প্রদান করে) অ্যারেটির প্রতিটি উপাদানে চালায়, যার ফলে একটি একক আউটপুট মান পাওয়া যায়। এটি প্রায়ই যোগফল, গুণফল হিসাব করতে বা কাস্টম লজিকের ভিত্তিতে অ্যারে রিডিউস করতে ব্যবহৃত হয়।

// **উদাহরণ:**
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // আউটপুট: 15

// **Use Case:**
// `reduce()` is used when you need to combine or accumulate array values into a single result. It is commonly used for calculating totals, averages, or even building complex objects from an array of data.


// ### **Why Use These Array Methods?**

// **In English:**
// 1. **Immutability:** All three methods (`map`, `filter`, and `reduce`) return new arrays, ensuring the original array remains unmodified, which is an essential aspect of functional programming.
// 2. **Cleaner Code:** These methods allow you to write clean, concise code without needing to manually loop through arrays, making it easier to read and maintain.
// 3. **Functional Programming Paradigm:** They allow you to apply functional programming principles like immutability, higher-order functions, and pure functions, making your code more predictable and testable.
// 4. **Performance:** These methods are optimized for performance and are often more efficient than using traditional loops when dealing with large datasets or complex transformations.

// **In Bengali:**
// 1. **ইমিউটেবিলিটি (অপরিবর্তনীয়তা):** এই তিনটি মেথড (`map`, `filter`, এবং `reduce`) নতুন অ্যারে প্রদান করে, নিশ্চিত করে যে মূল অ্যারে অপরিবর্তিত থাকে, যা ফাংশনাল প্রোগ্রামিং-এর একটি গুরুত্বপূর্ণ দিক।
// 2. **পরিষ্কার কোড:** এই মেথডগুলি আপনাকে অ্যারে গুলির মাধ্যমে ম্যানুয়ালি লুপ করার প্রয়োজন ছাড়াই পরিষ্কার এবং সংক্ষিপ্ত কোড লেখার সুযোগ দেয়, যা পড়া এবং রক্ষণাবেক্ষণ সহজ করে তোলে।
// 3. **ফাংশনাল প্রোগ্রামিং প্যারাডাইম:** এগুলি আপনাকে ফাংশনাল প্রোগ্রামিং-এর নীতিগুলি যেমন ইমিউটেবিলিটি, হায়ার-অর্ডার ফাংশন, এবং পিউর ফাংশন প্রয়োগ করতে দেয়, যার ফলে আপনার কোড আরও পূর্বানুমানযোগ্য এবং টেস্টেবল হয়।
// 4. **পারফরম্যান্স:** এই মেথডগুলি পারফরম্যান্সের জন্য অপটিমাইজ করা হয় এবং বড় ডেটাসেট বা জটিল রূপান্তরগুলির সাথে কাজ করার সময় প্রচলিত লুপ ব্যবহারের তুলনায় প্রায়ই আরও দক্ষ।


// ### **Conclusion**

// **In English:**
// Mastering the `map`, `filter`, and `reduce` methods is crucial for any JavaScript developer. These methods allow for cleaner, more readable code and promote the use of functional programming principles. They simplify array manipulation and reduce the need for explicit loops, making your code more efficient and maintainable.

// **In Bengali:**
// `map`, `filter`, এবং `reduce` মেথডগুলি আয়ত্ত করা যেকোনো JavaScript ডেভেলপারের জন্য অত্যন্ত গুরুত্বপূর্ণ। এই মেথডগুলি পরিষ্কার, আরও পড়তে উপযোগী কোড লেখার সুযোগ দেয় এবং ফাংশনাল প্রোগ্রামিং-এর নীতিগুলির ব্যবহার প্রচার করে। এগুলি অ্যারে ম্যানিপুলেশন সহজ করে এবং স্পষ্ট লুপ ব্যবহারের প্রয়োজন কমিয়ে দেয়, যার ফলে আপনার কোড আরও দক্ষ এবং রক্ষণাবেক্ষণযোগ্য হয়।
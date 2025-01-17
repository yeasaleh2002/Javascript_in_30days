### Day 8: Objects in JavaScript

#### 1. **What is an Object?**
   - **English:** An object is a collection of key-value pairs. It is one of the most used data structures in JavaScript. The keys are also known as properties, and the values can be any data type, including another object.
   - **Bangla:** একটি অবজেক্ট হল কিপরতি মানের সংগ্রহ। এটি জাভাস্ক্রিপ্টের সবচেয়ে ব্যবহৃত ডেটা কাঠামোগুলির মধ্যে একটি। কীগুলিকে প্রপার্টি বলা হয়, এবং মানগুলি যেকোনো ডেটা টাইপ হতে পারে, এমনকি অন্য একটি অবজেক্টও হতে পারে।

   - **Use Case:** Objects are used when you need to represent complex data with multiple attributes. For example, representing a car with properties like `make`, `model`, `year`, and `color`.

   - **Code Example:**
     ```javascript
     let car = {
         make: "Toyota",
         model: "Corolla",
         year: 2020,
         color: "blue"
     };
     console.log(car.make);  // Output: Toyota
     ```

---

#### 2. **Object Declaration**
   - **English:** You can declare an object using curly braces (`{}`), and each key-value pair is separated by a colon, while each pair is separated by commas.
   - **Bangla:** আপনি একটি অবজেক্ট ডিক্লেয়ার করতে পারেন curly ব্রেসেস (`{}`) ব্যবহার করে, এবং প্রতিটি কিপরতি মান একটি কলন দ্বারা আলাদা করা হয়, এবং প্রতিটি জোড়া কমা দ্বারা আলাদা করা হয়।

   - **Use Case:** Objects are ideal for when you need to represent a set of related properties.

   - **Code Example:**
     ```javascript
     let student = {
         name: "John",
         age: 22,
         department: "Computer Science"
     };
     console.log(student.name);  // Output: John
     ```

---

#### 3. **Accessing Object Properties**
   - **English:** You can access the properties of an object using either dot notation or bracket notation.
   - **Bangla:** আপনি একটি অবজেক্টের প্রপার্টি অ্যাক্সেস করতে পারেন ডট নোটেশন অথবা ব্র্যাকেট নোটেশন ব্যবহার করে।

   - **Use Case:** Use dot notation when you know the property name and bracket notation when you need to use a variable or dynamic property name.

   - **Code Example:**
     ```javascript
     let person = { name: "Alice", age: 25 };
     console.log(person.name);  // Output: Alice
     console.log(person["age"]);  // Output: 25
     
// #### 4. **Adding or Updating Object Properties**
  //  - **English:** You can add new properties to an object or update the existing ones by assigning a new value to a key.
  //  - **Bangla:** আপনি একটি অবজেক্টে নতুন প্রপার্টি যোগ করতে পারেন বা বিদ্যমান প্রপার্টির মান আপডেট করতে পারেন একটি নতুন মান নির্ধারণ করে।

  //  - **Use Case:** You can use this when you want to modify an object by adding new attributes or changing existing ones.

  //  Code Example:
     let user = { name: "Bob", age: 30 };
     user.email = "bob@example.com";  // Adding new property
     user.age = 31;  // Updating existing property
     console.log(user);  // Output: { name: "Bob", age: 31, email: "bob@example.com" }

// #### 5. **Deleting Object Properties**
  //  - **English:** You can remove a property from an object using the `delete` operator.
  //  - **Bangla:** আপনি `delete` অপারেটর ব্যবহার করে একটি অবজেক্ট থেকে প্রপার্টি মুছে ফেলতে পারেন।

  //  - **Use Case:** Useful when you want to clean up an object by removing unnecessary properties.

  //  Code Example:
     let person = { name: "Charlie", age: 28 };
     delete person.age;
     console.log(person);  // Output: { name: "Charlie" }

// #### 6. **Nested Objects**
  //  - **English:** Objects can contain other objects as values. This is known as a nested object.
  //  - **Bangla:** অবজেক্টগুলি অন্য অবজেক্টকে মান হিসেবে ধারণ করতে পারে। এটি একটি নেস্টেড অবজেক্ট বলা হয়।

  //  - **Use Case:** Nested objects are used when you need to represent hierarchical or more complex data structures.

  //  Code Example:
     let company = {
         name: "TechCorp",
         address: {
             street: "123 Main St",
             city: "New York"
         }
     };
     console.log(company.address.city);  // Output: New York

// #### 7. **Object Methods**
  //  - **English:** You can define methods inside an object. A method is a function that is a property of an object.
  //  - **Bangla:** আপনি একটি অবজেক্টের ভিতরে মেথড ডিফাইন করতে পারেন। একটি মেথড হল একটি ফাংশন যা একটি অবজেক্টের প্রপার্টি।

  //  - **Use Case:** Methods allow objects to perform actions based on the data they hold. For example, a `car` object can have a `drive` method that outputs a message.

  //  Code Example:

     let dog = {
         name: "Buddy",
         bark: function() {
             console.log("Woof!");
         }
     };
     dog.bark();  // Output: Woof!

// #### 8. **Object Constructor**
  //  - **English:** You can create objects using a constructor function. This allows you to create multiple instances of the same type of object.
  //  - **Bangla:** আপনি একটি কন্সট্রাক্টর ফাংশন ব্যবহার করে অবজেক্ট তৈরি করতে পারেন। এটি আপনাকে একই ধরনের অবজেক্টের একাধিক ইনস্ট্যান্স তৈরি করতে দেয়।

  //  - **Use Case:** Constructor functions are used when you need to create many objects of the same type with different properties.

  //  Code Example:
     function Person(name, age) {
         this.name = name;
         this.age = age;
     }
     let person1 = new Person("Sam", 25);
     let person2 = new Person("Kate", 30);
     console.log(person1.name);  // Output: Sam
     console.log(person2.age);   // Output: 30

// #### 9. **Object Destructuring**
  //  - **English:** Object destructuring allows you to unpack values from an object and assign them to variables.
  //  - **Bangla:** অবজেক্ট ডিস্ট্রাকচারিং আপনাকে একটি অবজেক্ট থেকে মানগুলো আলাদা ভ্যারিয়েবলে আনপ্যাক করার সুযোগ দেয়।

  //  - **Use Case:** Object destructuring makes it easier to work with objects, especially when you only need specific properties.

  //  Code Example:
     let person = { name: "Tom", age: 40 };
     let { name, age } = person;
     console.log(name);  // Output: Tom
     console.log(age);   // Output: 40

// #### 10. **The `this` Keyword**
//    - **English:** Inside an object method, the `this` keyword refers to the object itself.
//    - **Bangla:** একটি অবজেক্ট মেথডের মধ্যে, `this` কিওয়ার্ডটি অবজেক্টটিকে বোঝায়।

  //  - **Use Case:** `this` is useful when you want to refer to the object itself, especially when working with methods inside the object.

  //  Code Example:

     let person = {
         name: "John",
         greet: function() {
             console.log("Hello, " + this.name);
         }
     };
     person.greet();  // Output: Hello, John


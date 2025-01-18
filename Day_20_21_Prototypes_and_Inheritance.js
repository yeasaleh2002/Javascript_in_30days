### **Day 20-21: Prototypes and Inheritance**

#### **What is Prototyping in JavaScript?**

**In English:**
In JavaScript, **prototyping** refers to the ability of an object to inherit properties and methods from another object. Every JavaScript object has a hidden internal property called `[[Prototype]]`, which links to another object. This allows objects to share functionality and behaviors without duplicating code.

JavaScript objects use prototypes to implement inheritance. When you try to access a property or method of an object, JavaScript will first look for that property or method in the object itself. If it doesn't find it, JavaScript will look for it in the object's prototype (and the prototype's prototype, and so on) until it either finds the property or reaches the end of the prototype chain.

**In Bengali:**
JavaScript-এ **প্রোটোটাইপিং** হলো এমন একটি ক্ষমতা, যার মাধ্যমে একটি অবজেক্ট অন্য একটি অবজেক্ট থেকে প্রপার্টি এবং মেথড ইনহেরিট (উত্তরাধিকার) করতে পারে। প্রতিটি JavaScript অবজেক্টের একটি গোপন অভ্যন্তরীণ প্রপার্টি থাকে যাকে `[[Prototype]]` বলা হয়, যা অন্য একটি অবজেক্টের সাথে সংযুক্ত থাকে। এটি অবজেক্টগুলোকে কার্যকারিতা এবং আচরণ শেয়ার করতে দেয়, কোড পুনরাবৃত্তি না করে।

JavaScript অবজেক্টগুলি প্রোটোটাইপ ব্যবহার করে ইনহেরিটেন্স (উত্তরাধিকার) বাস্তবায়ন করে। যখন আপনি একটি অবজেক্টের প্রপার্টি বা মেথড অ্যাক্সেস করতে যান, JavaScript প্রথমে সেই প্রপার্টি বা মেথডটি অবজেক্টের মধ্যে খুঁজে দেখবে। যদি তা না পায়, JavaScript অবজেক্টের প্রোটোটাইপে (এবং প্রোটোটাইপের প্রোটোটাইপে, এবং এভাবে চলতে থাকবে) তা খুঁজে দেখবে যতক্ষণ না এটি প্রপার্টি খুঁজে পায় অথবা প্রোটোটাইপ চেইনের শেষ না হয়ে যায়।

---

### **Prototype Chain**

**In English:**
The **prototype chain** is the series of objects that are linked together through their prototypes. The chain starts with an object and continues through its prototype (if it has one) until it reaches `null`, which signifies the end of the chain.

For example, if you create an object with a constructor function, the object will inherit properties from the constructor’s prototype. If the prototype doesn’t have the property you're looking for, it will continue to search through the prototype chain.

**In Bengali:**
**প্রোটোটাইপ চেইন** হলো অবজেক্টগুলির একটি সিরিজ যা তাদের প্রোটোটাইপের মাধ্যমে একে অপরের সাথে সংযুক্ত থাকে। চেইনটি একটি অবজেক্ট দিয়ে শুরু হয় এবং তার প্রোটোটাইপের (যদি থাকে) মাধ্যমে চলতে থাকে যতক্ষণ না এটি `null` এ পৌঁছে, যা চেইনের শেষ নির্দেশ করে।

যেমন, যদি আপনি একটি কনস্ট্রাক্টর ফাংশন দিয়ে একটি অবজেক্ট তৈরি করেন, তবে সেই অবজেক্টটি কনস্ট্রাক্টরের প্রোটোটাইপ থেকে প্রপার্টি ইনহেরিট (উত্তরাধিকার) করবে। যদি প্রোটোটাইপে আপনি যে প্রপার্টিটি খুঁজছেন তা না থাকে, তবে এটি প্রোটোটাইপ চেইন ধরে খুঁজতে থাকবে।

---

### **Prototype Example**

**In English:**
Let’s create an example to understand prototypes in JavaScript. In this example, we will create a constructor function called `Person`, and every `Person` object will inherit a method from the prototype.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create a new Person object
const person1 = new Person("Alice", 25);

// Call the greet method
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
```

In this example, the `greet` method is added to the prototype of `Person`, meaning all instances of `Person` will inherit this method.

**In Bengali:**
JavaScript-এ প্রোটোটাইপ বুঝতে একটি উদাহরণ তৈরি করি। এই উদাহরণে, আমরা একটি কনস্ট্রাক্টর ফাংশন তৈরি করব যার নাম `Person`, এবং প্রতিটি `Person` অবজেক্ট প্রোটোটাইপ থেকে একটি মেথড ইনহেরিট করবে।

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person প্রোটোটাইপে একটি মেথড যুক্ত করুন
Person.prototype.greet = function() {
  console.log(`হ্যালো, আমার নাম ${this.name} এবং আমার বয়স ${this.age} বছর।`);
};

// একটি নতুন Person অবজেক্ট তৈরি করুন
const person1 = new Person("Alice", 25);

// greet মেথড কল করুন
person1.greet(); // আউটপুট: হ্যালো, আমার নাম Alice এবং আমার বয়স 25 বছর।
```

এই উদাহরণে, `greet` মেথডটি `Person` এর প্রোটোটাইপে যুক্ত করা হয়েছে, যার মানে হল যে `Person` এর সব ইনস্ট্যান্স এই মেথডটি ইনহেরিট করবে।

---

### **Inheritance in JavaScript**

**In English:**
Inheritance in JavaScript is a concept where one object can acquire properties and methods from another object. This is primarily achieved using prototypes. 

When an object inherits from another object, it gains access to the properties and methods of the parent object. JavaScript allows **prototypal inheritance**, where objects inherit directly from other objects, unlike class-based inheritance in languages like Java or C++.

In ES6, **class syntax** was introduced, which is a syntactic sugar for prototypal inheritance, making it easier to create objects and handle inheritance.

**In Bengali:**
JavaScript-এ ইনহেরিটেন্স (উত্তরাধিকার) হলো একটি ধারণা যেখানে একটি অবজেক্ট অন্য একটি অবজেক্ট থেকে প্রপার্টি এবং মেথড ইনহেরিট (উত্তরাধিকার) করতে পারে। এটি প্রধানত প্রোটোটাইপ ব্যবহার করে অর্জিত হয়।

যখন একটি অবজেক্ট অন্য একটি অবজেক্ট থেকে ইনহেরিট করে, তখন এটি প্যারেন্ট অবজেক্টের প্রপার্টি এবং মেথডগুলিতে অ্যাক্সেস পায়। JavaScript **প্রোটোটাইপাল ইনহেরিটেন্স** সমর্থন করে, যেখানে অবজেক্টগুলি সরাসরি অন্য অবজেক্ট থেকে ইনহেরিট করে, যেমন Java বা C++-এর ক্লাস-ভিত্তিক ইনহেরিটেন্সের তুলনায়।

ES6-এ **ক্লাস সিনট্যাক্স** পরিচিত হয়েছিল, যা প্রোটোটাইপাল ইনহেরিটেন্সের জন্য একটি সিনট্যাকটিক সুগার, যা অবজেক্ট তৈরি এবং ইনহেরিটেন্স হ্যান্ডলিং সহজ করে।

---

### **Class Syntax and Inheritance (ES6)**

**In English:**
ES6 introduced the **class** syntax, which is a more familiar way of defining objects and handling inheritance. While this syntax looks like class-based inheritance from languages like Java, it still uses prototypal inheritance under the hood.

Here’s an example of inheritance using ES6 classes:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Child class that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class's constructor
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a(n) ${this.jobTitle}.`);
  }
}

const employee1 = new Employee("Bob", 30, "Engineer");
employee1.greet(); // Inherited from Person
employee1.work(); // Defined in Employee
```

**In Bengali:**
ES6 **ক্লাস** সিনট্যাক্সটি পরিচিত হয়েছে, যা অবজেক্ট সংজ্ঞায়িত এবং ইনহেরিটেন্স হ্যান্ডলিং করার একটি আরও পরিচিত উপায়। যদিও এই সিনট্যাক্সটি Java এর মতো ক্লাস-ভিত্তিক ইনহেরিটেন্সের মতো দেখায়, তবে এটি এখনও ভিতরে প্রোটোটাইপাল ইনহেরিটেন্স ব্যবহার করে।

এখানে ES6 ক্লাস ব্যবহার করে ইনহেরিটেন্সের একটি উদাহরণ:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`হ্যালো, আমার নাম ${this.name} এবং আমার বয়স ${this.age} বছর।`);
  }
}

// Person থেকে ইনহেরিট করা চাইল্ড ক্লাস
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল করুন
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} ${this.jobTitle} হিসেবে কাজ করছে।`);
  }
}

const employee1 = new Employee("Bob", 30, "ইঞ্জিনিয়ার");
employee1.greet(); // Person থেকে ইনহেরিট করা
employee1.work(); // Employee-এ সংজ্ঞায়িত
```

---

// ### **Why Use Prototypes and Inheritance?**

// **In English:**
// 1. **Code Reusability**: Prototypes and inheritance allow objects to share common properties and methods, reducing code duplication and promoting reusability.
// 2. **Efficient Memory Use**: Methods defined on a prototype are shared by all instances, which saves memory as you don't need to define the same method multiple times.
// 3. **Flexible Object Structure**: Prototypes allow for dynamic and flexible changes to an object’s behavior or structure, which can be useful for extending functionality.

// **In Bengali:**
// 1. **কোড পুনরাবৃত্তি রোধ**: প্রোটোটাইপ এবং ইনহেরিটেন্স অবজেক্টগুলোকে সাধারণ প্রপার্টি এবং মেথড শেয়ার করতে দেয়, যা কোড পুনরাবৃত্তি কমায় এবং পুনঃব্যবহারযোগ্যতা বৃদ্ধি করে।
// 2. **কার্যকরী মেমরি ব্যবহার**: প্রোটোটাইপে সংজ্ঞায়িত মেথডগুলি সব ইনস্ট্যান্স দ্বারা শেয়ার করা হয়, যা মেমরি সাশ্রয়ী কারণ আপনাকে একই মেথড একাধিকবার সংজ্ঞায়িত করতে হয় না।
// 3. **লচিক অবজেক্ট কাঠামো**: প্রোটোটাইপগুলি অবজেক্টের আচরণ বা কাঠামোকে গতিশীল এবং নমনীয় পরিবর্তন করতে দেয়, যা কার্যকারিতা সম্প্রসারণের জন্য উপকারী হতে পারে।


// ### **Conclusion**

// **In English:**
// Prototypes and inheritance in JavaScript are essential concepts that allow objects to inherit behavior from other objects, enhancing code reusability and flexibility. Understanding prototypes enables better memory management, while inheritance provides an elegant way to structure complex applications.

// **In Bengali:**
// JavaScript-এ প্রোটোটাইপ এবং ইনহেরিটেন্স হলো গুরুত্বপূর্ণ ধারণা, যা অবজেক্টগুলোকে অন্যান্য অবজেক্ট থেকে আচরণ ইনহেরিট (উত্তরাধিকার) করতে দেয়, কোড পুনরাবৃত্তি এবং নমনীয়তা বৃদ্ধি করে। প্রোটোটাইপ বোঝা ভাল মেমরি ব্যবস্থাপনা নিশ্চিত করতে সাহায্য করে, এবং ইনহেরিটেন্স জটিল অ্যাপ্লিকেশন কাঠামো তৈরি করার জন্য একটি সুশৃঙ্খল উপায় প্রদান করে।
### **Day 26: Regular Expressions (RegEx)**

#### **What is a Regular Expression?**

**In English:**
A **regular expression** (RegEx) is a sequence of characters that forms a search pattern. It is used to perform pattern matching on strings, such as searching, replacing, or validating specific patterns in text. Regular expressions are very powerful and can be used for a wide range of tasks, including validating email addresses, phone numbers, and other data, searching for specific words in a string, or even replacing parts of a string with other text.

**In Bengali:**
একটি **রেগুলার এক্সপ্রেশন** (RegEx) হল অক্ষরের একটি সিকোয়েন্স যা একটি অনুসন্ধান প্যাটার্ন তৈরি করে। এটি স্ট্রিংয়ে প্যাটার্ন ম্যাচিং করতে ব্যবহৃত হয়, যেমন নির্দিষ্ট প্যাটার্ন অনুসন্ধান, প্রতিস্থাপন বা বৈধকরণ করা। রেগুলার এক্সপ্রেশনগুলি অত্যন্ত শক্তিশালী এবং এটি অনেক কাজের জন্য ব্যবহৃত হতে পারে, যেমন ইমেইল ঠিকানা, ফোন নম্বর এবং অন্যান্য ডেটা বৈধকরণ, একটি স্ট্রিংয়ের মধ্যে নির্দিষ্ট শব্দ অনুসন্ধান করা বা এমনকি একটি স্ট্রিংয়ের অংশকে অন্য পাঠ্য দ্বারা প্রতিস্থাপন করা।

---

### **Basic Syntax of Regular Expressions**

**In English:**
Regular expressions follow a specific syntax and are made up of special characters, each with its own meaning. Here are some basic components:

- **Literal characters**: These are normal characters that match themselves, like `a`, `b`, `1`, `A`, etc.
- **Metacharacters**: These are special characters that have specific meanings in regular expressions. Some important metacharacters include:
  - `.` (dot): Matches any single character except newline.
  - `^`: Anchors the pattern to the beginning of the string.
  - `$`: Anchors the pattern to the end of the string.
  - `[]`: Matches any one character inside the brackets. For example, `[abc]` matches `a`, `b`, or `c`.
  - `|`: Alternation, like a logical OR. For example, `a|b` matches either `a` or `b`.
  - `*`: Matches the preceding character 0 or more times.
  - `+`: Matches the preceding character 1 or more times.
  - `?`: Matches the preceding character 0 or 1 time.
  - `{n}`: Matches exactly `n` occurrences of the preceding character.
  - `\d`: Matches any digit (0-9).
  - `\w`: Matches any word character (alphanumeric and underscore).
  - `\s`: Matches any whitespace character (spaces, tabs, newlines).
  
**In Bengali:**
রেগুলার এক্সপ্রেশনগুলি একটি নির্দিষ্ট সিনট্যাক্স অনুসরণ করে এবং এটি বিশেষ অক্ষর নিয়ে গঠিত, প্রতিটির একটি নির্দিষ্ট মানে রয়েছে। এখানে কিছু মৌলিক উপাদান রয়েছে:

- **লিটারাল ক্যারেকটার**: এগুলি সাধারণ অক্ষর যা নিজেদের সাথে মেলে, যেমন `a`, `b`, `1`, `A`, ইত্যাদি।
- **মেটাচরেকটার**: এগুলি বিশেষ অক্ষর যা রেগুলার এক্সপ্রেশনে নির্দিষ্ট মানে রাখে। কিছু গুরুত্বপূর্ণ মেটাচরেকটার হল:
  - `.` (ডট): যেকোনো একটি অক্ষর মেলে, শুধু নতুন লাইনের অক্ষর ছাড়া।
  - `^`: প্যাটার্নটিকে স্ট্রিংয়ের শুরুতে আঙ্কর করে।
  - `$`: প্যাটার্নটিকে স্ট্রিংয়ের শেষে আঙ্কর করে।
  - `[]`: ব্র্যাকেটের ভিতরের যেকোনো একটি অক্ষর মেলে। উদাহরণস্বরূপ, `[abc]` মেলে `a`, `b`, বা `c`।
  - `|`: বিকল্প, যেমন একটি লজিক্যাল OR। উদাহরণস্বরূপ, `a|b` মেলে `a` অথবা `b`।
  - `*`: পূর্ববর্তী অক্ষরটি ০ বা তার বেশি বার মেলে।
  - `+`: পূর্ববর্তী অক্ষরটি ১ বা তার বেশি বার মেলে।
  - `?`: পূর্ববর্তী অক্ষরটি ০ বা ১ বার মেলে।
  - `{n}`: পূর্ববর্তী অক্ষরের ঠিক `n` বার মেলে।
  - `\d`: যেকোনো ডিজিট (০-৯) মেলে।
  - `\w`: যেকোনো শব্দের অক্ষর (অলফানিউমেরিক এবং আন্ডারস্কোর) মেলে।
  - `\s`: যেকোনো হোয়াইটস্পেস অক্ষর (স্পেস, ট্যাব, নিউলাইন) মেলে।

---

### **Use Cases for Regular Expressions**

**In English:**

1. **Validating Data**: You can use regular expressions to validate input data. For example, you can check if a string matches the format of an email address, phone number, or zip code.

   **Example for Email Validation**:
   ```javascript
   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   const email = "test@example.com";
   console.log(emailPattern.test(email)); // true
   ```

2. **Searching for Patterns**: Regular expressions allow you to search for specific patterns in a string. For instance, you can search for a phone number in a document or find all instances of a particular word.

   **Example for Searching for a Word**:
   ```javascript
   const text = "JavaScript is awesome! Learn JavaScript today.";
   const regex = /JavaScript/g;
   console.log(text.match(regex));  // ["JavaScript", "JavaScript"]
   ```

3. **Replacing Text**: You can replace specific parts of a string with a new value using regular expressions.

   **Example for Replacing Text**:
   ```javascript
   const str = "I love JavaScript";
   const updatedStr = str.replace(/JavaScript/, "Python");
   console.log(updatedStr);  // "I love Python"
   ```

4. **Extracting Data**: You can extract specific data from a string using capture groups within regular expressions.

   **Example for Extracting Data**:
   ```javascript
   const str = "My phone number is 123-456-7890.";
   const regex = /(\d{3})-(\d{3})-(\d{4})/;
   const match = str.match(regex);
   console.log(match);  // ["123-456-7890", "123", "456", "7890"]
   ```

**In Bengali:**

1. **ডেটা বৈধকরণ**: আপনি রেগুলার এক্সপ্রেশন ব্যবহার করে ইনপুট ডেটা বৈধকরণ করতে পারেন। উদাহরণস্বরূপ, আপনি চেক করতে পারেন যে একটি স্ট্রিং ইমেইল ঠিকানা, ফোন নম্বর বা জিপ কোডের ফরম্যাটের সাথে মেলে কিনা।

   **ইমেইল বৈধকরণের উদাহরণ**:
   ```javascript
   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   const email = "test@example.com";
   console.log(emailPattern.test(email)); // true
   ```

2. **প্যাটার্ন অনুসন্ধান**: রেগুলার এক্সপ্রেশন আপনাকে একটি স্ট্রিংয়ে নির্দিষ্ট প্যাটার্ন অনুসন্ধান করতে সাহায্য করে। উদাহরণস্বরূপ, আপনি একটি ডকুমেন্টে ফোন নম্বর অনুসন্ধান করতে পারেন বা একটি নির্দিষ্ট শব্দের সমস্ত উদাহরণ খুঁজে পেতে পারেন।

   **শব্দ অনুসন্ধানের উদাহরণ**:
   ```javascript
   const text = "JavaScript is awesome! Learn JavaScript today.";
   const regex = /JavaScript/g;
   console.log(text.match(regex));  // ["JavaScript", "JavaScript"]
   ```

3. **টেক্সট প্রতিস্থাপন**: আপনি রেগুলার এক্সপ্রেশন ব্যবহার করে একটি স্ট্রিংয়ের নির্দিষ্ট অংশ নতুন মানের সাথে প্রতিস্থাপন করতে পারেন।

   **টেক্সট প্রতিস্থাপনের উদাহরণ**:
   ```javascript
   const str = "I love JavaScript";
   const updatedStr = str.replace(/JavaScript/, "Python");
   console.log(updatedStr);  // "I love Python"
   ```

4. **ডেটা নিষ্কাশন**: আপনি রেগুলার এক্সপ্রেশনগুলির মাধ্যমে ক্যাপচার গ্রুপ ব্যবহার করে একটি স্ট্রিং থেকে নির্দিষ্ট ডেটা নিষ্কাশন করতে পারেন।

   **ডেটা নিষ্কাশনের উদাহরণ**:
   ```javascript
   const str = "My phone number is 123-456-7890.";
   const regex = /(\d{3})-(\d{3})-(\d{4})/;
   const match = str.match(regex);
   console.log(match);  // ["123-456-7890", "123", "456", "7890"]
   ```

---

### **Why Use Regular Expressions?**

**In English:**
- **Efficiency**: Regular expressions allow you to perform complex string matching, searching, and replacing in a single, compact expression.
- **Flexibility**: They can handle a wide variety of string matching tasks, from simple word searches to complex data validation.
- **Time-Saving**: Using regular expressions saves time compared to writing multiple lines of code for similar string operations.
- **Reusability**: Once you create a regular expression for a task, you can reuse it in multiple parts of your code or across different projects.

**In Bengali:**
- **দক্ষতা**: রেগুলার এক্সপ্রেশন আপনাকে একটি একক, কমপ্যাক্ট এক্সপ্রেশন-এ জটিল স্ট্রিং ম্যাচিং, অনুসন্ধান এবং প্রতিস্থাপন করতে দেয়।
- **লচীলাতা**: এটি বিভিন্ন ধরনের স্ট্রিং ম্যাচিং কাজ করতে সক্ষম, যেমন সহজ শব্দ অনুসন্ধান থেকে শুরু করে জটিল ডেটা বৈধকরণ পর্যন্ত।
- **সময় বাঁচানো**: রেগুলার এক্সপ্রেশন ব্যবহার করলে একই ধরনের স্ট্রিং অপারেশনের জন্য একাধিক লাইন কোড লেখার তুলনায় সময় বাঁচানো যায়।
- **পুনঃব্যবহারযোগ্যতা**: একবার আপনি একটি রেগুলার এক্সপ্রেশন একটি কাজের জন্য তৈরি করলে, আপনি এটি আপনার কোডের বিভিন্ন অংশে বা বিভিন্ন প্রকল্পে পুনরায় ব্যবহার করতে পারেন।

---

### **Conclusion**

**In English:**
Regular expressions are a powerful tool for string manipulation, validation, and searching. They are widely used in web development, data analysis, and text processing. Understanding and using RegEx can greatly improve your coding efficiency and help you handle

complex text-related tasks effectively.

**In Bengali:**
রেগুলার এক্সপ্রেশনগুলি স্ট্রিং ম্যানিপুলেশন, বৈধকরণ এবং অনুসন্ধানের জন্য একটি শক্তিশালী টুল। এগুলি ওয়েব ডেভেলপমেন্ট, ডেটা বিশ্লেষণ এবং টেক্সট প্রসেসিংয়ে ব্যাপকভাবে ব্যবহৃত হয়। রেগুলার এক্সপ্রেশন বোঝা এবং ব্যবহার করা আপনার কোডিং দক্ষতা উন্নত করতে এবং টেক্সট-সম্পর্কিত কাজগুলি দক্ষভাবে পরিচালনা করতে সাহায্য করবে।

---

This lesson introduces the basics of regular expressions and their various uses, helping students understand how to implement them in real-world applications like input validation and pattern matching.
/* 
Types of Operators:

Arithmetic Operators:

+ (Addition)

- (Subtraction)

* (Multiplication)

/ (Division)

% (Modulus: Remainder)

Assignment Operators:
=: Assigns value (e.g., x = 10)
+=: Adds and assigns (e.g., x += 5)

Comparison Operators:
== (Equality, type-insensitive)
=== (Strict equality)
> (Greater than)
< (Less than)
!= (Not equal)

Logical Operators:
&& (AND)
|| (OR)
! (NOT)
 */

// Example Code:
// / আরিথমেটিক অপারেটর উদাহরণ
let a = 15;
let b = 4;

console.log(a + b); // আউটপুট: 19
console.log(a - b); // আউটপুট: 11
console.log(a * b); // আউটপুট: 60
console.log(a / b); // আউটপুট: 3.75
console.log(a % b); // আউটপুট: 3

// তুলনা অপারেটর উদাহরণ
console.log(a > b);  // আউটপুট: true
console.log(a < b);  // আউটপুট: false

// লজিক্যাল অপারেটর উদাহরণ
console.log(a > 10 && b > 2); // true
console.log(a > 10 || b < 2); // true
console.log(!(a > 10));       // false

// আরিথমেটিক অপারেটরের মাধ্যমে গণনা করা যায়।
// তুলনা অপারেটর ব্যবহারে সত্য (true) বা মিথ্যা (false) পাওয়া যায়।
// লজিক্যাল অপারেটরের মাধ্যমে একাধিক শর্ত যাচাই করা হয়।
//alert():The alert() function in JavaScript is a simple way to display a pop-up dialog box with a message. 
alert("Hello, this is an alert!");

// confirm():The confirm() function is used to display a pop-up dialog box with a message and two buttons: "OK" and "Cancel."
//It's often used to get a simple yes/no confirmation from the user
var userConfirmed = confirm("Do you want to proceed?");
if (userConfirmed) {
  // User clicked "OK"
  console.log("User wants to proceed!");
} else {
  // User clicked "Cancel"
  console.log("User canceled the operation.");
}

//console.log():The console.log() function is used for logging messages to the browser's console.
// It's primarily used for debugging and displaying information during development
var name = "John";
console.log("Hello, " + name + "!");

//document.write():The document.write() function is used to write HTML content directly to the document.
document.write("<h1>Welcome to my website!</h1>");

//prompt():The prompt() function displays a dialog box with a message, an input field, and "OK" and "Cancel" buttons.
// It's often used to prompt the user for input.
var userResponse = prompt("Please enter your name:", "John Doe");
if (userResponse !== null) {
  console.log("User entered: " + userResponse);
} else {
  console.log("User canceled the prompt.");
}

// variables in javascript
var age; // Declaration using 'var'
let name; // Declaration using 'let'
const pi = 3.14; // Declaration using 'const' (constant)

//document.getElementById():method is used to retrieve a reference to an HTML element based on its unique ID.
/*<html>
  <body>
    <p id="myParagraph">This is a paragraph.</p>
    <script>
      var paragraphElement = document.getElementById("myParagraph");
      paragraphElement.innerHTML = "Updated paragraph content.";
    </script>
  </body>
</html>*/

//document.getElementsByClassName():method is used to retrieve a collection of HTML elements based on their class name.
/*<html>
  <body>
    <p class="myClass">First paragraph.</p>
    <p class="myClass">Second paragraph.</p>
    <script>
      var elementsWithClass = document.getElementsByClassName("myClass");
      for (var i = 0; i < elementsWithClass.length; i++) {
        elementsWithClass[i].style.color = "blue";
      }
    </script>
  </body>
</html>*/

//string concatenation
/*  String concatenation in JavaScript involves combining multiple strings into a single string. 
You can use the + operator or the concat() method for string concatenation.
method 1*/
var firstName = "John";
var lastName = "Doe";

var fullName = firstName + " " + lastName;
console.log(fullName);
/* method 2*/
var firstName = "John";
var lastName = "Doe";

var fullName = firstName.concat(" ", lastName);
console.log(fullName);
/* method 3 : modern method*/
var firstName = "John";
var lastName = "Doe";

var fullName = `${firstName} ${lastName}`;
console.log(fullName);

//operators

//-Arithmetic Operators:
  var x = 5;
  var y = 3;

  var sum = x + y;    // Addition
  var difference = x - y; // Subtraction
  var product = x * y; // Multiplication
  var quotient = x / y; // Division
  var remainder = x % y; // Modulus (remainder)

//-Comparison Operators:
  var a = 10;
  var b = 5;

  var isEqual = a == b; // Equal to
  var isNotEqual = a != b; // Not equal to
  var isGreater = a > b; // Greater than
  var isLess = a < b; // Less than
  var isGreaterOrEqual = a >= b; // Greater than or equal to
  var isLessOrEqual = a <= b; // Less than or equal to

//-Logical Operators:
  
  var isTrue = true;
  var isFalse = false;

  var andResult = isTrue && isFalse; // Logical AND
  var orResult = isTrue || isFalse;  // Logical OR
  var notResult = !isTrue; // Logical NOT

//-Assignment Operators:
  var num = 10;

  num += 5; // Equivalent to: num = num + 5;
  num -= 3; // Equivalent to: num = num - 3;
  num *= 2; // Equivalent to: num = num * 2;
  num /= 4; // Equivalent to: num = num / 4;

//-Increment and Decrement Operators:
  var count = 5;

  count++; // Increment by 1 (post-increment)
  ++count; // Increment by 1 (pre-increment)

  count--; // Decrement by 1 (post-decrement)
  --count; // Decrement by 1 (pre-decrement)


  // Function declaration
  function greet(name) {
    console.log("Hello, " + name + "!");
  }

  // Calling the function
  greet("John");

  // Function expression
  var multiply = function(a, b) {
    return a * b;
  };

  // Arrow function
  var add = (x, y) => x + y;


  // Function with default parameter
  function power(base, exponent = 2) {
    return Math.pow(base, exponent);
  }

  var result = power(3); // Uses default exponent (2)
  // Function with rest parameters
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  var totalSum = sum(1, 2, 3, 4, 5);

  // Callback function
  function doSomethingAsync(callback) {
    setTimeout(function() {
      console.log("Task is done!");
      callback();
    }, 1000);
  }

  doSomethingAsync(function() {
    console.log("Callback executed.");
  });

// Named function expression
  var factorial = function fact(n) {
    return n > 1 ? n * fact(n - 1) : 1;
  };

//conditional statements

//-If Statement:
  var temperature = 25;

  if (temperature > 30) {
    console.log("It's a hot day!");
  } else if (temperature >= 20 && temperature <= 30) {
    console.log("The weather is pleasant.");
  } else {
    console.log("It's cold outside.");
  }

//-Switch Statement:
  var dayOfWeek = 3;
  var dayName;

  switch (dayOfWeek) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    // ... other cases ...
    default:
      dayName = "Unknown day";
  }

  console.log("Today is " + dayName);

//- **Ternary Operator (Conditional Operator):
  var isRaining = true;

  var activity = isRaining ? "Stay indoors" : "Go for a walk";
  console.log(activity);

//- **Truthy and Falsy Values:
  var userScore = 0;

  if (userScore) {
    console.log("User has a score.");
  } else {
    console.log("User has no score.");
  }

//In this example, `userScore` is a falsy value (zero), so the else block will be executed.

//-Logical Operators in Conditionals:
  var hasDriverLicense = true;
  var hasCar = false;

  if (hasDriverLicense && hasCar) {
    console.log("You can drive!");
  } else if (hasDriverLicense || hasCar) {
    console.log("You have either a driver's license or a car.");
  } else {
    console.log("You can't drive.");
  }

// array

//- **Creating an Array:
  var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];//method 1
    var house=new Array();//method 2

//- **Accessing Elements:**

  var firstFruit = fruits[0];
  var secondFruit = fruits[1];

  console.log("First fruit:", firstFruit);
  console.log("Second fruit:", secondFruit);

//- **Adding Elements:**


  // Adding elements to the end of the array
  fruits.push('Grapes', 'Pineapple');

  // Adding elements to the beginning of the array
  fruits.unshift('Strawberry', 'Kiwi');

//- **Removing Elements:
  // Removing the last element
  var removedLast = fruits.pop();

  // Removing the first element
  var removedFirst = fruits.shift();

//- **Finding the Index of an Element:
  var indexOfOrange = fruits.indexOf('Orange');

//-Slicing and Splicing:
  // Slicing a portion of the array
  var citrusFruits = fruits.slice(1, 4);

  // Splicing (changing the content of an array by removing or replacing existing elements)
  fruits.splice(2, 1, 'Lemon', 'Lime');

//-Looping Through an Array:
  // Using a for loop
  for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }

  // Using forEach method
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });


//-Array Methods:
  // Concatenating arrays
  var moreFruits = ['Peach', 'Watermelon'];
  var allFruits = fruits.concat(moreFruits);

  // Checking if an element exists in the array
  var hasMango = fruits.includes('Mango');

  // Joining array elements into a string
  var fruitsString = fruits.join(', ');
  
//for loop
//- **Basic `for` Loop:*
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

//- **`for` Loop with Array:**
  var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }

//- **`for` Loop for Decrementing:**

  for (var i = 5; i > 0; i--) {
    console.log(i);
  }

//- **Nested `for` Loops:
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      console.log(i, j);
    }
  }

//-`for...in` Loop for Object Properties:
  var person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };

  for (var key in person) {
    console.log(key + ': ' + person[key]);
  }

//-`for...of` Loop for Iterables (e.g., Arrays):
  var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  for (var fruit of fruits) {
    console.log(fruit);
  }

//while and for each loop
//- **Basic `while` Loop:**
  var i = 0;

  while (i < 5) {
    console.log(i);
    i++;
  }
//- **`while` Loop with Array:**

  var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
  var index = 0;

  while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
  }
//- **Infinite `while` Loop with Break Statement:**
  var counter = 0;

  while (true) {
    console.log("This is an infinite loop.");

    counter++;

    if (counter === 5) {
      break; // Exit the loop after 5 iterations
    }
  }

//- **`forEach` Loop with Array:**
  var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  fruits.forEach(function(fruit) {
    console.log(fruit);
  });
//- **Using Arrow Function (ES6+):**
  var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  fruits.forEach(fruit => console.log(fruit));
//  With the arrow function syntax, the `forEach` loop becomes more concise.

//- **`forEach` Loop with Index:**
  var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
  });

//  The `forEach` loop can also provide the index of the current element

// when and how to use break and continue
//break
//- **Purpose:**
  //- `break` is used to exit a loop prematurely, stopping further iterations.

//-**Example - Exiting a Loop:**
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      console.log("Reached the break statement.");
      break;
    }
    console.log(i);
  }

//- **Use Case - Searching for an Element:**
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var target = 7;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      console.log("Element found at index " + i);
      break;
    }
  }

//  This is useful when searching for a specific element in an array. The loop terminates as soon as the target element is found.

//`continue` Statement:
//- **Purpose:**
  //- `continue` is used to skip the rest of the code inside a loop for the current iteration and move on to the next one.

//**Example - Skipping an Iteration:**
  for (var i = 0; i < 5; i++) {
    if (i === 2) {
      console.log("Skipping iteration 2.");
      continue;
    }
    console.log(i);
  }
//  In this example, when `i` is 2, the message "Skipping iteration 2" will be displayed, and the loop will continue with the next iteration.

// **Use Case - Filtering Elements:**
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      // Skip even numbers
      continue;
    }
    console.log(numbers[i]);
  }
//This is useful when you want to filter or skip certain elements based on a condition.

//When to Use `break` and `continue`:

/*`break`:**
  - Use `break` when you want to exit a loop prematurely based on a certain condition.
  - Typically used for early termination when a specific condition is met.

- **`continue`:**
  - Use `continue` when you want to skip the rest of the code for the current iteration and move on to the next iteration.
  - Useful for skipping specific elements or iterations based on a condition.*/

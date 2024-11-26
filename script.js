//1 - Create variables for your first name, last name, and age. Display a message in the console that says: "Hello, my name is [first name] [last name] and I am [age] years old."
console.log("Q1.");
var a = "Puneet";
var b = "Rawat";
var c = 23;
console.log(`Hello, my name is ${a} ${b} and I am ${c} years old.`);

//2 - Perform calculations to determine the total price of three items with prices of $5, $10, and $15. Display the result in the console.
console.log("Q2.");
var result = 5 + 10 + 15;
console.log(`Total price: ${result}`);

//3 - Create a variable greeting that stores a string "Hello, World!".
console.log("Q3.");
var greeting = "Hello, World!";
console.log(greeting);

//4 - Extract the word "World" from the greeting string using the slice method.
console.log("Q4.");
var extract = greeting.slice(7, 12);
console.log(extract);

//5 - Convert the extracted word to uppercase.
console.log("Q5.");
console.log(extract.toUpperCase());

//6 - Create a new string that says "HELLO, WORLD!!!" using the slice and toUpperCase methods, along with string concatenation.
console.log("Q6.");
var a = greeting.slice(0, 6).toUpperCase();
var b = greeting.slice(12);
console.log(a + " " + extract.toUpperCase() + b + b + b);

//7 - Create a variable name and assign it your name.
console.log("Q7.");
var name = "Puneet Rawat";
console.log(name);

//8 - Create another variable age and assign it your age.
console.log("Q8.");
var age = 23;
console.log("Age: " + age);

//9 - Use template literals to create a string that says "Hello, my name is [name] and I am [age] years old."
console.log("Q9.");
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

//10 - Create a variable userInput that stores a string input from the user (you can simulate this by assigning a string directly).
console.log("Q10.");
var userInput = "hel";

//Write an if/else statement to check if the input string:
//10.a - Contains the word "hello" (case insensitive). If it does, log "Greeting detected.".
//10.b - Has a length greater than 10 characters. If it does, log "Long input.".
//10.c - If neither of the above conditions is met, log "Standard input."
if (userInput == "hello") {
    console.log("Greeting detected");
} else if (userInput.length > 10) {
    console.log("Long input");
} else {
    console.log("Standard input");
}

//11 - Create a variable temperature and assign it a value (e.g., 30).
console.log("Q11.");
var temp = 3;

// Write an if/else statement that:
// a. Logs "It's hot outside!" if the temperature is above 30.
// b. Logs "It's cold outside!" if the temperature is below 15.
// c. Logs "The weather is moderate." if the temperature is between 15 and 30.
if (temp > 30) {
    console.log("It's hot outside!");
} else if (temp < 15) {
    console.log("It's cold outside!");
} else if (15 < temp < 30) {
    console.log("The weather is moderate.");
}

//12 - Create a variable year that holds a string value "2024"
console.log("Q12.");
var yr = "2024";
console.log(yr + " " + typeof yr);

//13 - Convert it to a number using Number() and store it in a new variable
console.log("Q13.");
var yr_num = Number(yr);
console.log(yr_num + " " + typeof yr_num);

//14 - Add 10 to this number and log the result.
console.log("Q14.");
console.log(yr_num + 10);

//15 - Convert a boolean true to a string using String() and log the result.
console.log("Q15.");
var bool = true;
console.log(bool + " " + typeof bool);
var st = String(bool);
console.log(st + " " + typeof st);

//16 - Create a variable num with the value 10.
console.log("Q16.");
var num = 10;
// Use coercion to combine num with a string "5" and log the result.
console.log(String(num) + "5");

//17 - Create variables a, b, c, and assign them values 0, "", and null respectively.
console.log("Q17.");
var a = 0; //falsy
var b = ""; //falsy
var c = null; //falsy
// Use an if/else statement to check if each variable is truthy or falsy and log the result.
//for a
if (a) {
    console.log("truthy");
} else {
    console.log("falsy");
}
//for b
if (b) {
    console.log("truthy");
} else {
    console.log("falsy");
}
//for c
if (c) {
    console.log("truthy");
} else {
    console.log("falsy");
}

//18 - Create two variables x and y with values 5 and "5" respectively.
console.log("Q18.");
var x = 5;
var y = "5";
// Use both == and === to compare them and log the results.
var result1 = x == y; //(x == y)
console.log(" == operator: " + result1);
var result2 = x === y; // (x === y)
console.log(" === operator: " + result2);

//19. - Explain the difference between the two operators based on your observations.
// "Q19."
// "== operator is case insesitive and ignores the data type"
// "=== operator is case sensitive and checks the data type"

//20 - Create three boolean variables: a = true, b = false, and c = true.
console.log("Q20.");
var a = true;
var b = false;
var c = true;

//Use the logical operators (&&, ||, !) to evaluate the following expressions and log the results:
// a && b
console.log(a && b); //false
// a || b
console.log(a || b); // true
// !(a && c)
console.log(!(a && c)); //false

//21 - Create variables x = 7 and y = 10.
console.log("Q21.");
var x = 7;
var y = 10;
// Use logical operators to check:
// If x is greater than 5 AND y is less than 15.
console.log(x > 5 && y < 15); //true
// If x is equal to 7 OR y is equal to 15.
console.log(x == 7 || y == 15); //true
// Negate the result of (x > 5) and log it.
console.log(!(x > 5)); //false

//22 - Write a switch statement that takes a variable day and logs the corresponding day of the week.
//If day = 1, log "Monday", if day = 2, log "Tuesday", and so on up to "Sunday".
//Include a default case that logs "Invalid day".

console.log("Q22.");
var day = 4;
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
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//23 - Create a statement that declares a variable a and assigns it a value of 5.
console.log("Q23.");
var a = 5; //statement

//24 - Create an expression that adds a to 10 and logs the result.
console.log("Q24.");
var result = a + 10; //expression
console.log(result);

//25 - Explain the difference between a statement and an expression in your code comments.
//statement - when we declare or control flow
//expression -  when we compute results and a value is expected

//26 - Create a variable age and assign it a value.
console.log("Q26.");
var age = 17;
console.log(age);

//27 - Use the ternary operator to log "Adult" if the age is 18 or older, and "Minor" if not.
console.log("Q27");
console.log(age >= 18 ? "Adult" : "Minor");

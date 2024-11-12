//1
console.log("Q1.");
var a = "Puneet";
var b = "Rawat";
var c = 23;
console.log(`Hello, my name is ${a} ${b} and I am ${c} years old.`);

//2
console.log("Q2.");
var result = 5 + 10 + 15;
console.log(`Total price: ${result}`);

//3
console.log("Q3.");
var greeting = "Hello, World!";
console.log(greeting);

//4
console.log("Q4.");
var extract = greeting.slice(7, 12);
console.log(extract);

//5
console.log("Q5.");
console.log(extract.toUpperCase());

//6
console.log("Q6.");
var a = greeting.slice(0, 6).toUpperCase();
var b = greeting.slice(12);
console.log(a + " " + extract.toUpperCase() + b + b + b);

//7
console.log("Q7.");
var name = "Puneet Rawat";
console.log(name);

//8
console.log("Q8.");
var age = 23;
console.log("Age: " + age);

//9
console.log("Q9.");
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

//10
console.log("Q10.");
var userInput = "hel";
if (userInput == "hello") {
    console.log("Greeting detected");
} else if (userInput.length > 10) {
    console.log("Long input");
} else {
    console.log("Standard input");
}

//11
console.log("Q11.");
var temp = 3;
if (temp > 30) {
    console.log("It's hot outside!");
} else if (temp < 15) {
    console.log("It's cold outside!");
} else if (15 < temp < 30) {
    console.log("The weather is moderate.");
}

//12
console.log("Q12.");
var yr = "2024";
console.log(yr + " " + typeof yr);

//13
console.log("Q13.");
var yr_num = Number(yr);
console.log(yr_num + " " + typeof yr_num);

//14
console.log("Q14.");
console.log(yr_num + 10);

//15
console.log("Q15.");
var bool = true;
console.log(bool + " " + typeof bool);
var st = String(bool);
console.log(st + " " + typeof st);

//16
console.log("Q16.");
var num = 10;
console.log(String(num) + "5");

//17
console.log("Q17.");
var a = 0; //falsy
var b = ""; //falsy
var c = null; //falsy
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

//18
console.log("Q18.");
var x = 5;
var y = "5";
var result1 = x == y; //(x == y)
console.log(" == operator: " + result1);
var result2 = x === y; // (x === y)
console.log(" === operator: " + result2);

//19.
console.log("Q19.");
console.log("== operator is case insesitive and ignores the data type");
console.log("=== operator is case sensitive and checks the data type");

//20
console.log("Q20.");
var a = true;
var b = false;
var c = true;
console.log(a && b); //false
console.log(a || b); // true
console.log(!(a && c)); //false

//21
console.log("Q21.");
var x = 7;
var y = 10;
console.log(x > 5 && y < 15); //true
console.log(x == 7 || y == 15); //true
console.log(x > 5); //true

//22
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

//23
console.log("Q23.");
var a = 5; //statement

//24
console.log("Q24.");
var result = a + 10; //expression
console.log(result);

//25
console.log("Q25.");
//statement - when we declare or control flow
//expression -  when we compute results and a value is expected

//26
console.log("Q26.");
var age = 17;
console.log(age);

//27
console.log("Q27");
console.log(age >= 18 ? "Adult" : "Minor");

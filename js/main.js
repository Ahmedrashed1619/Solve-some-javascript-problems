// .......... the first JS Assignment ..........



// ..... [1] Write a program that allow to user enter number than print it .....

/*let num = Number( window.prompt("Enter the number") );

document.write(num);*/



// ..... [2] Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no .....

/*let num = Number( window.prompt("Enter the number") );

if (num % 3 === 0 && num % 4 === 0) {
    document.write("Yes");
} else {
    document.write("No");
}*/



// ..... [3] Write a program that allows the user to insert 2 integers then print the max .....

/*let num1 = Number( window.prompt("Enter the frist number") );
let num2 = Number( window.prompt("Enter the second number") );

num1 = parseInt (num1);
num2 = parseInt (num2);

document.write(`the Max Number is ${Math.max(num1 , num2)}`);*/



// ..... [4] Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive .....

/*let num = Number( window.prompt("Enter the number") );

num = Math.ceil (num);

if ( num > 0 ) {
    document.write("Positive");
} else if (num < 0) {
    document.write("Negative");
} else {
    document.write(zero);
}*/



// ..... [5] Write a program that take 3 integers from user then print the max element and the min element .....

/*let num1 = Number( window.prompt("Enter the frist number") );
let num2 = Number( window.prompt("Enter the second number") );
let num3 = Number( window.prompt("Enter the third number") );

num1 = parseInt (num1);
num2 = parseInt (num2);
num3 = parseInt (num3);

document.write(`the Max Number is ${Math.max(num1 , num2 , num3)} and the Min Number is ${Math.min(num1 , num2 , num3)}`);*/



// ..... [6] Write a program that allows the user to insert an integer number then check if a number is oven or odd .....

/*let num = Number( window.prompt("Enter the number") );

num = parseInt (num);

if (num %2 === 0) {
    document.write("even");
} else {
    document.write("odd");
}*/



// ..... [7] Write a program that take character from user then if it is vowel chars(a,e,i,o,u) then print vowel otherwise print consonant .....

/*let char = window.prompt("Enter the char");

char = char.toLowerCase();

if (char.startsWith("a") || char.startsWith("e") || char.startsWith("i") || char.startsWith("o") || char.startsWith("u")) {
    document.write("vowel");
} else {
    document.write("consonant");
}*/



// ..... [8] Write a program that allows the user to insert an integer then print all numbers between 1 to that's number .....

/*let num = Number( window.prompt("Enter the number") );

num = parseInt (num);

for (let i = 1; i <= num; i++) {
    document.write(i);
}*/



// ..... [9] Write a program that allows the user to insert an integer then print a multiplication table up to 12 .....

/*let num = Number( window.prompt("Enter the number") );

num = parseInt (num);

for (let i = 1; i <= 12; i++) {
    document.write(i * num);
}*/



// ..... [10] Write a program that allows to user to insert an integer then print all even numbers .....

/*let num = Number( window.prompt("Enter the number") );

num = parseInt (num);

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        document.write(i);
    }
}*/



// ..... [11] Write a program that take two integers then print the power .....

/*let num = Number( window.prompt("Enter the number") );

/*let power = Number( window.prompt("Enter the power") );

let result = (num ** power);

document.write(result);*/



// ..... [12] Write a program to enter marks of five subjects and calculate totel, average and percentage .....

/*let subject1 = Number( window.prompt("Enter the frist subject") );
let subject2 = Number( window.prompt("Enter the second subject") );
let subject3 = Number( window.prompt("Enter the third subject") );
let subject4 = Number( window.prompt("Enter the forth subject") );
let subject5 = Number( window.prompt("Enter the fifth subject") );

let total = ( subject1 + subject2 + subject3 + subject4 + subject5 );
let average = (total / 5);
average = Math.round(average);

let percentage = (total / 500) * 100;

document.write(`Totle marks = ${total} ... Average = ${average} ... percentage = ${average}%`);*/



// ..... [13] Write a program to input month number and print number of days in that month .....

/*let num = Number( window.prompt("Enter The month Number: ") );

num = parseInt(num);

if (num === 1) {
    document.write(`Days in This Month: 31`);
} else if (num === 2) {
    document.write(`Days in This Month: 28  OR  "29 Days"`);
} else if (num === 3) {
    document.write(`Days in This Month: 31`);
} else if (num === 4) {
    document.write(`Days in This Month: 30`);
} else if (num === 5) {
    document.write(`Days in This Month: 31`);
} else if (num === 6) {
    document.write(`Days in This Month: 30`);
} else if (num === 7) {
    document.write(`Days in This Month: 31`);
} else if (num === 8) {
    document.write(`Days in This Month: 31`);
} else if (num === 9) {
    document.write(`Days in This Month: 30`);
} else if (num === 10) {
    document.write(`Days in This Month: 31`);
} else if (num === 11) {
    document.write(`Days in This Month: 30`);
} else if (num === 12) {
    document.write(`Days in This Month: 31`);
} else {
    document.write(`Not Found This Month`);
}*/



// ..... [14] Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics, Computer, Find percentage and grade .....

/*let physics = Number( window.prompt("Enter the frist subject") );
let chemistry = Number( window.prompt("Enter the second subject") );
let biology = Number( window.prompt("Enter the third subject") );
let mathematics = Number( window.prompt("Enter the forth subject") );
let computer = Number( window.prompt("Enter the fifth subject") );

let total = ( physics + chemistry + biology + mathematics + computer );
let average = (total / 5);
average = Math.round(average);

let percentage = (total / 500) * 100;

if (percentage >= 90) {
    document.write(`Grad A`);
} else if (percentage >= 80 && percentage < 90) {
    document.write(`Grad B`);
} else if (percentage >= 70 && percentage < 80) {
    document.write(`Grad C`);
} else if (percentage >= 60 && percentage < 70) {
    document.write(`Grad D`);
} else if (percentage >= 50 && percentage < 60) {
    document.write(`Grad E`);
} else if (percentage >= 40 && percentage < 50) {
    document.write(`Grad F`);
}*/



// ..............................Switch case..............................



// ..... [15] Write a program to print total number of days in month .....

/*let num = Number( window.prompt("Enter The month Number: ") );

num = parseInt(num);

switch (num) {
    case 1:
        document.write(`Days in This Month: 31`);
        break;
    case 2:
        document.write(`Days in This Month: 28  OR  "29 Days"`);
        break;
    case 3:
        document.write(`Days in This Month: 31`);
        break;
    case 4:
        document.write(`Days in This Month: 30`);
        break;
    case 5:
        document.write(`Days in This Month: 31`);
        break;
    case 6:
        document.write(`Days in This Month: 30`);
        break;
    case 7:
        document.write(`Days in This Month: 31`);
        break;
    case 8:
        document.write(`Days in This Month: 31`);
        break;
    case 9:
        document.write(`Days in This Month: 30`);
        break;
    case 10:
        document.write(`Days in This Month: 31`);
        break;
    case 11:
        document.write(`Days in This Month: 30`);
        break;
    case 12:
        document.write(`Days in This Month: 31`);
        break;
    default:
        document.write(`Not Found This Month`);
}*/



// ..... [16] Write a program to check whether an alphabet is vowel or consonantr .....

/*let char = window.prompt("Enter the char");

char = char.toLowerCase();

switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("vowel");
        break;
    default:
        document.write("consonant");
}*/



// ..... [17] Write a program to find maximum between two numbers .....

/*let num1 = Number( window.prompt("Enter the frist number") );
let num2 = Number( window.prompt("Enter the second number") );

num1 = parseInt (num1);
num2 = parseInt (num2);

let result ;

if (num1 > num2) {
    result = num1;
} else {
    result = num2;
}

switch (result) {
    case num1:
        document.write(`the maximum number is the first number ${result}`);
        break;
    default:
        document.write(`the maximum number is the second number ${result}`);
}*/



// ..... [18] Write a program to check whether a number is even or odd .....

/*let num = Number( window.prompt("Enter the number") );

num = parseInt (num);

let result ;

if (num %2 === 0) {
    result = "even";
} else {
    result = "odd";
}

switch (result) {
    case "even":
        document.write(`the number is "even"`);
        break;
    default:
        document.write(`the number is "odd"`);
}*/



// ..... [19] Write a program to check whether a number is positive, negative or zero .....

/*let num = Number( window.prompt("Enter the number") );

num = parseInt (num);

let result ;

if (num === 0) {
    result = "zero";
} else if (num > 0) {
    result = "positive";
} else {
    result = "negative";
}

switch (result) {
    case "zero":
        document.write(`the number is "zero"`);
        break;
    case "positive":
        document.write(`the number is "positive"`);
        break;
    default:
        document.write(`the number is "negative"`);
}*/



// ..... [20] Write a program to create a simple calculator .....

/*let num1 = Number( window.prompt("Enter the frist number") );
let operator = window.prompt("Enter the operator");
let num2 = Number( window.prompt("Enter the second number") );

let result ;

num1 = parseInt (num1);
num2 = parseInt (num2);

switch (operator) {
    case `+`:
        result = (Number(num1) + Number(num2));
        document.write(`the result is ${result}`);
        break;
    case `-`:
        result = num1 - num2;
        document.write(`the result is ${result}`);
        break;
    case `*`:
        result = num1 * num2;
        document.write(`the result is ${result}`);
        break;
    case `/`:
        result = num1 / num2;
        document.write(`the result is ${result}`);
        break;
    default:
        document.write(`this operator don't found`);
}*/



//..........[21] Palindromes...............

// function palindromes(word){
//     let regx = /[\W]/g;
//     let response = word.replace(regx , '');
//     let myWord = response.split('').reverse().join('');
//     myWord === response ? console.log('true') : console.log('false');
// }

// palindromes('rar');
// palindromes('eye');
// palindromes('yahay');
// palindromes('never');
// palindromes('_never odd or even_');
// palindromes('ahmed');


//..........[22] Call stack & event loop...............
                                            // output => one , four , three , two
// console.log('one');  

// setTimeout(() => {
//     console.log('two');
// }, 100);

// setTimeout(() => {
//     console.log('three');
// }, 0);

// console.log('four');


//..........[23] what will log  (Hoisting)...............

// var i = 2;

// let fun = function(){
    
//     console.log(i);

//     var i = 5;
// }

// fun();                          // output => undefined

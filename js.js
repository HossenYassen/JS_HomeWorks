//-----------------------------------
//  Submitters' Names:              |
// * Hossen Yassen - חוסין יאסין   |
// * Celien Jammal - סילין ג'מאל   |
//-----------------------------------


/************************************************************************************
*                                    True or False
************************************************************************************/

//                                     Task #1

if ("0") {
    alert('Hello');
}
/* Will Be Alert?
Yes, since "0" is not an empty string so js will consider it as true, and the condition in the if statement will be satisfied
*/

/************************************************************************************/

//                                     Task #2

// This code asking the user to enter the formal name of js so:
// if ECMAScrpt => show "Correct!"" otherwise show "לא יודע? ECMAScript!"
if (prompt("What is the formal name of JavaScript?") === "ECMAScript") {
    alert("Correct!");
    // or alternativaly showing the result in the console:
    // console.log("Correct!"); 
}
else {
    alert("לא יודע? ECMAScript!");
    // or alternativaly showing the result in the console:
    // console.log("לא יודע? ECMAScript!");
}

/************************************************************************************/

//                                     Task #3

let score = 75;
let grade;

// Changing the code from if...else conditions to ternary operator
grade = score >= 90 ? "A" :
    score >= 80 ? "B" :
        score >= 70 ? "C" :
            score >= 60 ? "D" :
                "F";
console.log("הציון הוא:", grade);

/************************************************************************************/

//                                     Task #4

// This code is get a number from the user using prompt and alert:
// if the value of the number > 0 => alert 1
// if the value of the number < 0 => alert -1
// if the value of the number = 0 => alert 0
// The user should type only digits

let ans = prompt("Enter a number:");
// Maybe this loop is not required in this                                     task, but if the input is always valid so it will never
// activate so optionally i will leave it to me more solid code
while (isNaN(ans)) {
    alert("Invalid input! Please Enter a number again:");
    ans = prompt("Enter a number:");
}
let num = Number(ans);
if (num > 0) {
    alert(1);
}
else if (num < 0) {
    alert(-1);
}
else {
    alert(0);
}

/************************************************************************************/

//                                     Task #5

// Will rewrite the code with ternary operator
// Result will contain 'Not enough' if (a + b < 4) otherwise it will contain 'A lot'
let result = (a + b < 4) ? 'Not enough' : 'A lot';

/************************************************************************************/

//                                     Task #6

// Changing the code from if...else conditions to ternary operator
let message = login === 'Employee' || login === 'Director' ? 'Hello' :
    login === '' ? 'No login' : '';


/************************************************************************************/

//                                     Task #7

//                                Expected Output:
console.log(false || 'sdf');         // sdf
console.log(false && '');            // false
console.log(true || '');             // true
console.log(true && '');             // ''
console.log(undefined || null);      // null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); // undefined
console.log(1 || 0);                 // 1
console.log(null || 1);              // 1
console.log(null || 0 || 1);         // 1





/************************************************************************************
*                                       Loops
************************************************************************************/

//                                     Task #1

// This code calculate the sum of the numbers from 1 to 100 and print it to console
let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i++;
}
console.log(`1 + 2 + 3 + ... + 100 = ${sum}`);

/************************************************************************************/

//                                     Task #2

// This code ask the user to enter a number:
// if the user enter non-positive number or not entered a number the code asks him to enter again
// if the user enter a valid number so the code will print the number to the console

let userNum;

do {
    userNum = prompt("Enter a positive number: ");
} while (isNaN(userNum) || Number(userNum) <= 0);
console.log(`The number is ${userNum}`);

/************************************************************************************/

//                                     Task #3

// Showing the multiplication table of 7 from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

/************************************************************************************/

//                                     Task #4

// The code asks the user to enter a number from 1 to 10 if the user guess the number
// it shows correct in consloe otherwise the code keep asking the user to guess the number
// until the user guess it
const secret = 7;
let guess;
for (; ;) {
    if (Number(prompt("נחש את המספר בין 1 ל־10:")) === secret)
        break;
    console.log("לא נכון. נסה שוב.");
}
console.log("נכון!")



/************************************************************************************/

//                                     Task #5

// Using for loop we print to the console all the numbers from 1 to 30 that are not
// divided by 3 without remainder
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}


/************************************************************************************/

//                                     Task #6

// What is the last value that this code show?
// i have changed the i to j just because i declared previously
let j = 3;

while (j) {
    alert(j--);
}

// The last value that this code will show is 1 this is because the while loop will continue running
// while j > 0 once j = 0 this means that the condition of while is false so it will stop and then the
// last value that has been shown then is 1


/************************************************************************************/

//                                     Task #7

// Left code:
/*
let i = 0;
while (++i < 5) {
    console.log(i);
}

Output:
1
2
3
4

the pre-increment operator (++i) increases the value of i by 1 before checking the condition. 
So, i starts from 1, and then the condition is checked. If the condition (i < 5) is true, it prints i to the console.


// Right code:
let i = 0;
while (i++ < 5) {
    console.log(i);
}

Output:
1
2
3
4
5

the post-increment operator (i++) first checks if i satisfies the condition (i < 5).
After the condition is checked, i is incremented. So, i is printed starting from 1, and the loop continues until i becomes 5, at which point it is printed as well.


So the answer is NO.
*/


/************************************************************************************/

//                                     Task #8

// Left code:
/*
for(let i = 0 ; i < 5 ; i++) console.log(i);

// Right code:
for(let i = 0 ; i < 5 ; ++i) console.log(i);

Yes, because i++ or ++i is implemented at the end of each for iteration which is doesnt matter!
*/


/************************************************************************************/

//                                     Task #9

// Using for loop, printing to the console the even numbers from 2 to 10
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0)
        console.log(i);
}

/************************************************************************************/

//                                     Task #10

// Replacing for loop with while loop, and leaving the code functionality
let t = 0;
while (t < 3) {
    alert(`number ${t++}!`);
}

/************************************************************************************/
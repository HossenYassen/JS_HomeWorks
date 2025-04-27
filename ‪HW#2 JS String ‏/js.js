//------------------------------------
//  Submitters' Names:               |
// * Hossen Yassen - חוסין יאסין    |
// * Celien Jammal - סילין ג'מאל    |
//------------------------------------


/************************************************************************************
*                                       String
************************************************************************************/

//                                      Task #1

let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'

// To Show the length of bio string in console:
console.log(bio.length);


/************************************************************************************/

//                                      Task #2

// This script asks the user to enter a number
// make sure that the number in the str length bounds
// if in bound: print the letter in that index
// otherwise: asks him to enter again

const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
let answer = prompt(`Enter a number between 0 - ${str.length-1}`);
while(!(answer >= 0 && answer <= str.length-1))
{
    answer = prompt(`invalid number! reEnter a number between 0 - ${str.length-1}`);
}
console.log(`char #${answer} is: "${str[answer]}"`)

/************************************************************************************/

//                                      Task #3

// This script is asks the user for string, get it from the user and
// prints to the console the last and pre-last letters in the str

const userStr = prompt(`Enter a string: `);
console.log(`Pre-last letter: ${userStr[userStr.length-2]}\nLast letter: ${userStr[userStr.length-1]}`);


/************************************************************************************/

//                                      Task #4

const task4Str = "abcde";
let task4StrRev = "";
// We have to create new string variable that contains the reversed task4String
for(let i = task4Str.length - 1; i >= 0 ; i--)
{
    task4StrRev += task4Str[i];
}
// It's not a part of the question requirements, its just for me to check!
console.log(task4StrRev);


/************************************************************************************/

//                                      Task #5

// Converting "js" string to "JS"
console.log("js".toUpperCase());


/************************************************************************************/

//                                      Task #6

// This script asks the user for a string and check if the user's string inside the str

const task6Str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
let userAnswer = prompt("Enter a string: ");
if(task6Str.includes(userAnswer))
    console.log("Its there");
else
    console.log("Its not there!");
    
/************************************************************************************/

//                                      Task #7

// We have to replace all the '-' in the following string to '.' with replace function

let task7Str = "1-2-3-4-5";
while(task7Str.includes('-'))
{
    task7Str = task7Str.replace('-', '.');
}
console.log(task7Str);

/************************************************************************************/

//                                      Task #8

// We have to replace all the '-' in the following string to '.' with replaceAll function

const task8Str = "1-2-3-4-5";
console.log(task8Str.replaceAll('-','.'));

/************************************************************************************/

//                                      Task #9

const task9Str = "sdfwe";
console.log(task9Str.substring(4, 2)); // fw
// This because substring method is rearrange the 4, 2 e.g: substring(2, 4)
// to make it work just fine without errors


/************************************************************************************/

//                                      Task #10

// Should print to the console the learning work with these three methods:

const task10Str = "I'm learning javascript!";

// Method 1: using substr method:
console.log(task10Str.substr(4, 8));

// Method 2: using substring method:
console.log(task10Str.substring(4, 12));

// Method 3: using slice method:
console.log(task10Str.slice(4, 12));


/************************************************************************************/

//                                      Task #11

// Check if this line starts with 'http://' (use indexOf)

const task11Str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/';
if(task11Str.indexOf("http://") === 0)
    console.log("The string does start with 'http://'");
else
    console.log("The string does NOT start with 'http://'");

/************************************************************************************/

//                                      Task #12

// Check if this line ends with '.html' (use indexOf)

const task12Str = 'https://www.notion.html';
if(task12Str.indexOf(".html") === (task12Str.length - ".html".length))
    console.log("The string does end with '.html'");
else
    console.log("The string does NOT end with '.html'");

/************************************************************************************/

//                                      Task #13



/************************************************************************************/

//                                      Task #14



/************************************************************************************/

//                                      Task #15



/************************************************************************************/

//                                      Task #16



/************************************************************************************/
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



/************************************************************************************/

//                                      Task #8



/************************************************************************************/

//                                      Task #9



/************************************************************************************/

//                                      Task #10



/************************************************************************************/

//                                      Task #11



/************************************************************************************/

//                                      Task #12



/************************************************************************************/

//                                      Task #13



/************************************************************************************/

//                                      Task #14



/************************************************************************************/

//                                      Task #15



/************************************************************************************/

//                                      Task #16



/************************************************************************************/
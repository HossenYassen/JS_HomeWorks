//------------------------------------
//  Submitters' Names:                
// * Hossen Yassen - חוסין יאסין     
// * Celien Jammal - סילין ג'מאל     
//------------------------------------


/************************************************************************************
*                                    Arrow Functions
************************************************************************************/

//                                     Task #1

// We have to create arrow function that gets string and return in with ! at the end

// example: addExclamation("Hi") => "Hi!"
const addExclamation = str => { return (str + '!') };

/************************************************************************************/

//                                     Task #2

// We have to create arrow function that gets a string and return it words reversed
// example: reverseWords("I love JS") => "JS love I"

const reverseWords = sentence => {
    return sentence.split(' ').reverse().join(' ');
};

/************************************************************************************/

//                                     Task #3

// We have to create a function that get numbers array and returns a new numbers array
// that contains the squared numbers of each number in the previous array 

// example: squareAll([1, 2, 3]) => [1, 4, 9]
const squareAll = arr => {
    return arr.map(elem => Math.pow(elem, 2))
};

/************************************************************************************/

//                                     Task #4

// We have to create a funtion that gets names array and a number and retrun just the
// names that their length is greater than the number

// example: filterNames(["Dan", "Jonathan", "Eli"], 3) => ["Jonathan", "Eli"]
const filterNames = (names, minLength) => {
    return names.filter(name => name.length > minLength)
};

/************************************************************************************/

//                                     Task #5

// We have to create function that gets numbers array and retruns true just if all 
// the numbers in the array are positive, ohterwise returns false

// example: allPositive([1, 5, 8]) => true
// example: allPositive([3, -2, 0]) => false
const allPositive = numbers => { 
    return numbers.every(number => number > 0)
 };

/************************************************************************************/
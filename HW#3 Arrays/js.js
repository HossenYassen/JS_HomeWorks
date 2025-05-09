//------------------------------------
//  Submitters' Names:                
// * Hossen Yassen - חוסין יאסין     
// * Celien Jammal - סילין ג'מאל     
//------------------------------------


/************************************************************************************
*                                      Methods
************************************************************************************/

//                                     Task #5

// We have to remove "banana" from the array in replace it with "blueberry"
// and "blackberry"

const fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1,1,"blueberry", "blackberry")
console.log(fruits);




/************************************************************************************/

//                                     Task #6

// We need a subarray from the given array that contains just "orange" and "yellow"
const colors = ["red", "orange", "yellow", "green", "blue"];
const newArr = colors.slice(1,3)
console.log(newArr);


/************************************************************************************/

//                                     Task #7

// We need to concetate the two arrays into one new array
const animals1 = ["cat", "dog"];
const animals2 = ["lion", "tiger"];
const Animals = [];
let index = 0;
for (const animal of animals1) {
    Animals[index++] = animal;
}

for (const animal of animals2) {
    Animals[index++] = animal;
}
console.log(Animals);


/************************************************************************************/

//                                     Task #8

// We have to sort the array's elements in ascending order
const numbers = [7, 3, 9, 1, 5];
numbers.sort((a,b) => a-b);
console.log(numbers);


/************************************************************************************/

//                                     Task #9

// We have to reverse the order or the letters
const letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);


/************************************************************************************/

//                                     Task #10

// We have to split the sentence into words array
const sentence = "JavaScript is awesome";
const wordsArr = sentence.split(" ");
console.log(wordsArr);


/************************************************************************************/

//                                     Task #11

// Joining thw words from the words array into one scentence string
const words = ["Hello", "world"];
const oneSentence = words.join(" ");
console.log(oneSentence);


/************************************************************************************/

/************************************************************************************
*                                      מעבדים מערכים
************************************************************************************/

//                                     Task #



/************************************************************************************/
//                                     Task #



/************************************************************************************/
//                                     Task #



/************************************************************************************/
//                                     Task #



/************************************************************************************/
//                                     Task #



/************************************************************************************/
//                                     Task #



/************************************************************************************/
//                                     Task #



/************************************************************************************/
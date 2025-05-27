//------------------------------------
//  Submitters' Names:                
// * Hossen Yassen - חוסין יאסין     
// * Celien Jammal - סילין ג'מאל     
//------------------------------------


/************************************************************************************
*                                    
************************************************************************************/

//                                     Task #1

// example: addExclamation("Hi") => "Hi!"
const addExclamation = str => {return  str + '!' };
console.log(addExclamation("Hi"))

/************************************************************************************/

//                                     Task #2

 // example: reverseWords("I love JS") => "JS love I"
const reverseWords = sentence => { 
    return sentence.split(" ").reverse().join(" ");
};
console.log(reverseWords("I love JS"))

/************************************************************************************/

//                                     Task #3

// example: squareAll([1, 2, 3]) => [1, 4, 9]
const squareAll = arr => { 
  return arr.map(function(item){
    return item**2;
   })
 };
 console.log(squareAll([1,2,3]))

/************************************************************************************/

//                                     Task #4

// example: filterNames(["Dan", "Jonathan", "Eli"], 3) => ["Jonathan"]
const filterNames = (names, minLength) => { 
    return names.filter(function(elem){
        return elem.length> minLength;
    })
};
console.log(filterNames(["Dan", "Jonathan", "Eli"], 3));

/************************************************************************************/

//                                     Task #5

// example: allPositive([1, 5, 8]) => true
// example: allPositive([3, -2, 0]) => false
const allPositive = numbers => { 
    return numbers.every(function(item){
        return item>0
    })
};
console.log(allPositive([1, 5, 8]))
console.log(allPositive([3, -2, 0]))

/************************************************************************************/

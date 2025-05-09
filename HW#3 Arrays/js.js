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

//                                     Task #14

// Print the name of each student inside properate message
const students = ["דני", "נועה", "רן", "תמר"];
students.forEach(function(studnet){
    console.log(`שלום, ${studnet}! בהצלחה במבחן`);
});

/************************************************************************************/
//                                     Task #15

// Create new array that contains the prices in $: 1$ = 3.5 Shekels
const pricesILS = [100, 250, 75, 320];
// תוצאה: [28.57, 71.43, 21.43, 91.43]
const pricesUSD = pricesILS.map(function(price){
    return parseFloat((price/3.5).toFixed(2));
})
console.log(pricesUSD);

/************************************************************************************/
//                                     Task #16



/************************************************************************************/
//                                     Task #

// Filtering just the users with isLoggedIn is true
const users = [
{ username: "Tom", isLoggedIn: true },
{ username: "Jerry", isLoggedIn: false },
{ username: "Spike", isLoggedIn: true }
];

const logedin = users.filter(function(user){
    return user["isLoggedIn"];
})

console.log(logedin);


/************************************************************************************/
//                                     Task #17

// Checks if there at least one product that is out of stock
const products = [
{ name: "Book", quantity: 3 },
{ name: "Pen", quantity: 0 },
{ name: "Notebook", quantity: 5 }
];

const result = products.some((prod) => prod["quantity"] === 0)
console.log(result ? "Yes, there is a product that is out of stock" 
                   : "No, all the products in the stock");

/************************************************************************************/
//                                     Task #18

// Checks if all teh students pass the exam
const grades = [72, 85, 90, 67, 58];
// במקרה הזה - צריך להחזיר false
const result = grades.every((grade) => grade >== 60);
console.log(result ? "Yes, all the students pass" 
                   : "No, not all the students pass");

/************************************************************************************/
//                                     Task #19

// Filter the names of the employees in capital letter that their sallaries are
// grater than 8000
const employees = [
  { name: "Sharon", salary: 9500 },
  { name: "David", salary: 7800 },
  { name: "Lior", salary: 12000 }
];

const results = employees.filter(emp => emp.salary > 8000).map(emp => emp.name.toUpperCase());

console.log(results);


/************************************************************************************/
//                                     Task #20

// Check if there is at least one book with more than 500 pages:
// if yes: return all the books with more than 500 pages
const books = [
  { title: "Book A", pages: 450 },
  { title: "Book B", pages: 520 },
  { title: "Book C", pages: 600 }
];

const results1 = books.some((book) => book["pages"] > 500) 
  ? books.filter((book) => book["pages"] > 500)  // Use filter to return the books themselves
  : [];
console.log(results1);

/************************************************************************************/
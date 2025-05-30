//------------------------------------
//  Submitters' Names:                
// * Hossen Yassen - חוסין יאסין     
// * Celien Jammal - סילין ג'מאל     
//------------------------------------


/************************************************************************************
*                                    
************************************************************************************/

//                                     Task #1

// Write mouseover event that changes the backgorund color to orange when the mouse
// over it

// Html Element:
//<div id="hoverBox" style="width:100px; height:100px; background-color: gray;"></div>

// When the mouse over the element its bg color changes to orange
const element = document.getElementById("hoverBox");
element.addEventListener('mouseover', ()=>{
    element.style.backgroundColor = 'orange';
})


/************************************************************************************/

//                                     Task #2

// Html Element:
//<div id="hoverBox2" style="width:100px; height:100px; background-color: gray;"></div>

// When the mouse get out of it it returns to the orginal bg color and when its on it
// its bg color changes to orange
const element2 = document.getElementById("hoverBox2");
const orginalBgColor = element2.style.backgroundColor;
element2.addEventListener('mouseover', ()=>{
    element2.style.backgroundColor = 'orange';
})

element2.addEventListener('mouseout', ()=>{
    element2.style.backgroundColor = orginalBgColor;
})

/************************************************************************************/

//                                     Task #3

// Html Elements:
// <button id="clickBtn">לחץ כאן</button>
// <p>נלחץ: <span id="clickCount">0</span> פעמים</p>

// We have to create onClick event that when press the button the number in the p tag
// increase (get updated)

const btnElem = document.getElementById("clickBtn");
const coutnerSpan = document.getElementById("clickCount");
btnElem.addEventListener('click', ()=>{
    coutnerSpan.textContent = parseInt(coutnerSpan.textContent) + 1;
})

/************************************************************************************/

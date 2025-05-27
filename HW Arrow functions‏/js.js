//------------------------------------
//  Submitters' Names:                
// * Hossen Yassen - חוסין יאסין     
// * Celien Jammal - סילין ג'מאל     
//------------------------------------


/************************************************************************************
*                                    
************************************************************************************/

//                                     Task #1

const box = document.querySelector('#hoverBox')
let changeColor = box => {
    box.style.background="orange"
}

/************************************************************************************/

//                                     Task #2

let returnColor = box =>{
    box.style.background="grey"
}

/************************************************************************************/

//                                     Task #3

const btn = document.querySelector('#clickBtn')
let count=document.getElementById('clickCount')
let countClick = btn =>{
    count.textContent = parseInt(count.textContent)+1
}

/************************************************************************************/
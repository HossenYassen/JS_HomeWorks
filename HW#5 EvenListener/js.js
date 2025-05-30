//------------------------------------
//  Submitters' Names:                
// * Hossen Yassen - חוסין יאסין     
// * Celien Jammal - סילין ג'מאל     
//------------------------------------


/************************************************************************************
*                                  Events Listeners
************************************************************************************/

//                                     Task #1

const reviewText = document.getElementById("review-text");
const toggleBtn = document.getElementById("toggle-review");

const shortText = `"This company exceeded my expectations in every way..."`;
const fullText = `"This company exceeded my expectations in every way. Their team was professional, responsive, and incredibly skilled. I couldn't have asked for a better experience and result!"`;

toggleBtn.addEventListener('click', ()=>{
    if(toggleBtn.textContent == 'Read full review'){
        reviewText.textContent = fullText;
        toggleBtn.textContent = 'Show less';
    }
    else{
        reviewText.textContent = shortText;
        toggleBtn.textContent = 'Read full review';
    }
})

/************************************************************************************/
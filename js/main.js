// TOHLE PAK VYMAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT
'use strict';

// TEXT AREA AUTOGROW (used in html code)
function auto_grow(element) {
    element.style.height = "100px";
// + 30px, aby tam bylo másto na progress circle a counter
    element.style.height = (element.scrollHeight) + "px";
}


// Progress Circle
let progressCircle = document.querySelector('.progress');
let progressCircleR = progressCircle.getAttribute('r');
let counter = document.getElementById('counter');
let textarea = document.getElementById('textarea');

// Length of characters (CAN BE CHANGED)
let charactersLength = 50;

counter.textContent = charactersLength;

let progressCircleLength = parseInt(progressCircleR, 10) * 2 * Math.PI;
progressCircle.style.strokeDashoffset = progressCircleLength;
progressCircle.style.strokeDasharray = progressCircleLength;

textarea.addEventListener('input', function(e) {
    

// COUNTER
    let textareaValue = textarea.value;
    let textareaLength = textareaValue.length;
    counter.textContent = charactersLength - textareaLength;
// COUNTER

    let percentage = textareaLength / charactersLength;
    let newOffset = progressCircleLength * percentage;

    if (textareaLength > 0) {
        
        progressCircle.classList.toggle('warning', textareaLength >= charactersLength - 10);
        progressCircle.classList.toggle('danger', textareaLength > charactersLength);
        progressCircle.classList.toggle('over', textareaLength >= charactersLength + 1);


        // console.log(e);

        // if (textareaLength > charactersLength) {
        //     textarea.style.backgroundColor = "rgba(255, 0, 0, .6)";
            
        // }
        // textareaValue.classList.toggle('danger-text', textareaLength > charactersLength);
        // textarea.innerHTML = `${textareaValue.slice(0, charactersLength)}<mark>${textareaValue.slice(charactersLength)}</mark>`

        counter.classList.toggle('danger', textareaLength > charactersLength);
        
        if (textareaLength <= charactersLength) {
            progressCircle.style.strokeDashoffset = progressCircleLength - newOffset;
            progressCircle.style.strokeDasharray = progressCircleLength;
        }



// Potřebuju počítat 'progressCircle.style.strokeDashoffset = progressCircleLength - newOffset;' i když je 'textareaLength > charactersLength'
        console.log(textareaLength);
    }
});
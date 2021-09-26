// TOHLE PAK VYMAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT
'use strict';

// TEXT AREA AUTOGROW (used in html code)
function auto_grow(element) {
    element.style.height = "100px";
// + 30px, aby tam bylo másto na progress circle a counter
    element.style.height = (element.scrollHeight) + "px";
}


const progress = (function(){
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

// COLORS
function handleColors(textareaLength) {
    progressCircle.classList.toggle('warning', textareaLength >= charactersLength - 10);
    progressCircle.classList.toggle('danger', textareaLength > charactersLength);
    progressCircle.classList.toggle('over', textareaLength >= charactersLength + 1);

    counter.classList.toggle('danger', textareaLength > charactersLength);
}
// COLORS


textarea.addEventListener('input', function(e) {
// COUNTER
    let textareaValue = textarea.value;
    let textareaLength = textareaValue.length;
    counter.textContent = charactersLength - textareaLength;
// COUNTER

    let percentage = textareaLength / charactersLength;
    let newOffset = progressCircleLength * percentage;

    if (textareaLength >= 0) {
        
        handleColors(textareaLength);

        progressCircle.style.strokeDashoffset = 0;
        
        if (textareaLength <= charactersLength) {
            progressCircle.style.strokeDashoffset = progressCircleLength - newOffset;
            progressCircle.style.strokeDasharray = progressCircleLength;
        }
    }
});
}());
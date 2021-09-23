// TOHLE PAK VYMAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT
'use strict';

// TEXT AREA AUTOGROW (used in html code)
function auto_grow(element) {
    element.style.height = "80px";
// + 30px, aby tam bylo másto na progress circle a counter
    element.style.height = (element.scrollHeight) + 30 + "px";
}


// Progress Circle
let progressCircle = document.querySelector('.progress');
let progressCircleR = progressCircle.getAttribute('r');
let counter = document.getElementById('counter');
let textarea = document.getElementById('textarea');

textarea.addEventListener('input', function(e) {
    // Length of characters (CAN BE CHANGED)
    let charactersLength = 50;

// COUNTER
    let textareaLength = textarea.value.length;
    counter.textContent = charactersLength - textareaLength;
// COUNTER

    let progressCircleLength = parseInt(progressCircleR, 10) * 2 * Math.PI;
    let percentage = textareaLength / charactersLength;
    let newOffset = progressCircleLength * percentage;

    if (textareaLength > 0) {
        
        progressCircle.classList.toggle('warning', textareaLength >= charactersLength - 10);
        progressCircle.classList.toggle('danger', textareaLength > charactersLength);
        progressCircle.classList.toggle('over', textareaLength >= charactersLength + 1);

        counter.classList.toggle('danger', textareaLength > charactersLength);
        
        if (textareaLength <= charactersLength) {
            progressCircle.style.strokeDashoffset = progressCircleLength - newOffset;
            progressCircle.style.strokeDasharray = progressCircleLength;
        }



// Potřebuju počítat 'progressCircle.style.strokeDashoffset = progressCircleLength - newOffset;' i když je 'textareaLength > charactersLength'
        console.log(textareaLength);
    }
});
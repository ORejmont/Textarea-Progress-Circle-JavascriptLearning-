"use strict";

// TEXT AREA AUTOGROW (used in html code)
function auto_grow(element) {
    element.style.height = "100px";
    // + 30px, aby tam bylo másto na progress circle a counter
    element.style.height = element.scrollHeight + "px";
}

var progress = function () {
    // Progress Circle
    var progressCircle = document.querySelector('.progress');
    var progressCircleR = progressCircle.getAttribute('r');
    var counter = document.getElementById('counter');
    var textarea = document.getElementById('textarea');

    // Length of characters (CAN BE CHANGED)
    var charactersLength = 50;

    counter.textContent = charactersLength;

    var progressCircleLength = parseInt(progressCircleR, 10) * 2 * Math.PI;
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


    textarea.addEventListener('input', function (e) {
        // COUNTER
        var textareaValue = textarea.value;
        var textareaLength = textareaValue.length;
        counter.textContent = charactersLength - textareaLength;
        // COUNTER

        var percentage = textareaLength / charactersLength;
        var newOffset = progressCircleLength * percentage;

        if (textareaLength >= 0) {

            handleColors(textareaLength);

            progressCircle.style.strokeDashoffset = 0;

            if (textareaLength <= charactersLength) {
                progressCircle.style.strokeDashoffset = progressCircleLength - newOffset;
                progressCircle.style.strokeDasharray = progressCircleLength;
            }
        }
    });
}();

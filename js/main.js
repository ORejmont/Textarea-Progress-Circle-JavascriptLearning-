// TOHLE PAK VYMAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT
'use strict';

// TEXT AREA AUTOGROW (used in html code)
function auto_grow(element) {
    element.style.height = "80px";
// + 30px, aby tam bylo másto na progress circle a counter
    element.style.height = (element.scrollHeight) + 30 + "px";
}
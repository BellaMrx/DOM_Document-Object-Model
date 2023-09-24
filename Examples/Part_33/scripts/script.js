"use script";

document.querySelector('#name').onblur = function() {
    var txt = "<b>Your input:</b> " + this.value;
    /* Check stored value of the text field in txt */
    document.querySelector('p').innerHTML = txt;
};
"use script";

document.querySelector('#chapter').onchange = function() {
    var txt = "<b>Your choice:</b> " + this.value;
    // Check stored value of the text field in txt 
    document.querySelector('p').innerHTML = txt;
};
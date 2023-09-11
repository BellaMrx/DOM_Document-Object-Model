"use strict";

let text = document.querySelector('p').innerHTML;
if (text) {
    text += " " + "has been extended!";
    document.querySelector('p').innerHTML = text;
}
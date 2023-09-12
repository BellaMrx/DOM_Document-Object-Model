"use strict";

let element = document.getElementById('message');
if (element) {
    let text = element.innerHTML;
    text += " " + "has been extended!";
    element.innerHTML = text;
} else {
    console.log("Element with ID message was not found!");
}
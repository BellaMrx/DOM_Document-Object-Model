"use strict";

let element = document.querySelector('.p-style');
element.style.color = "black";
element.style.background = "lavender";
element.style.font = "1.2em Arial";

function changeColor() {
    let headline = document.querySelector('.headline');
    headline.style.color = "limegreen";
    headline.style.font = "2.5em serif";
    headline.style.fontStyle = "italic";
}
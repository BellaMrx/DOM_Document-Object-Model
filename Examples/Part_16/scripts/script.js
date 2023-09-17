"use strict";

let element = document.querySelector('#button01');
if (element) {
    element.addEventListener("click", changeColor);
    element.addEventListener("click", changeText);
    element.addEventListener("mouseover", myborder);
    element.addEventListener("mouseout", noborder);
} else {
    console.log("Error: Could not set up event handler!")
}

function changeColor() {
    document.querySelector('.p-style').style.color = "limegreen";
    document.querySelector('.p-style').style.font = "1.2em Arial";
}

function changeText() {
    document.querySelector('.p-style').innerHTML = "New text";
}

function myborder() {
    document.querySelector('.p-style').style.border = "1px solid black";
}

function noborder() {
    document.querySelector('.p-style').style.border = "0px solid black";
}
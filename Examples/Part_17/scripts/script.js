"use strict";

let element = document.querySelector('.p-style');
element.addEventListener("mouseover", mymouseover);
element.addEventListener("mousedown", mymousedown);
element.addEventListener("mouseup", mymouseup);
element.addEventListener("mouseout", mymouseout);

function mymouseover() {
    element.innerHTML = "Mouse cursor over HTML element";
}

function mymousedown() {
    element.innerHTML = "Mouse button pressed";
}

function mymouseup() {
    element.innerHTML = "Mouse button released";
}

function mymouseout() {
    element.innerHTML = "Exit HTML element";
}
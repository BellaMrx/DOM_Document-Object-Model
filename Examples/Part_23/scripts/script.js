"use strict";

let id = document.querySelector('.my-p');
if (id) {
    id.addEventListener("mousedown", get_mouse_p, true);
} else {
    alert("No element with id=myId found!");
}

function get_mouse_p() {
    alert("Mouse button pressed in p!");
}
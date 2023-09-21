"use strict";

function get_mouse() {
    var text = "Mouse button pressed!"
    var pos = document.querySelector('output');
    if (pos) {
        pos.innerHTML = text;
        pos.style.background = "lightgrey";
    }
}
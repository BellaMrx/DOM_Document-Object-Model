"use strict";

let element = document.querySelectorAll('article:nth-child(odd)');
for (let i = 0; i < element.length; i++) {
    element[i].style.backgroundColor = "lavender";
}
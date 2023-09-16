"use strict";

let xchange = true;

function changePicture() {
    let current = document.querySelector('.pic');

    if (xchange) {
        current.src = "images/flower_480.jpg";
        current.alt = "Flowers";
        xchange = false;
    } else {
        current.src = "images/whale_480.jpg";
        current.alt = "Whale";
        xchange = true;
    }
}
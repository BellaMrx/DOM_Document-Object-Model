"use strict";

function changeContent() {
    document.querySelector('h1').innerHTML = "New headline!";
    let element = document.querySelector('p');
    element.innerHTML = "<strong>New content</strong> for the paragraph text";
}
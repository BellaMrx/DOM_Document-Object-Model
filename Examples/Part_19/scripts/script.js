"use strict";

document.querySelector('.link').onclick = function(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    // Here write the actual JavaScript code what 
    // should happen when the link was clicked on
    console.log("Default action prevented");
}
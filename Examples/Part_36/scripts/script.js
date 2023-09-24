"use strict";

document.querySelector('form').addEventListener(
    'submit', checkInput);
document.querySelector('form').addEventListener(
    'reset', checkReset);

function checkInput() {
    var x = confirm("Do you really want to send the data?")
    if (x) {
        /* Send data */
    } else {
        /* Do not send */
        event.preventDefault();
    }
}

function checkReset(event) {
    var x = confirm("Do you want to reset the fields?")
    if (x) {
        /* Reset */
        document.querySelector('p').innerHTML = "Fields reset";
    } else {
        /* Do not reset */
        event.preventDefault();
        document.querySelector('p').innerHTML = "Reset canceled";
    }
}
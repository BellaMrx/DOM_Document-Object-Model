"use strict";

function getColor() {
    var colors = document.querySelectorAll('[name="color"]');
    let htmlText = "Colors to choose : " + colors.length +
        "<br>You have chosen  :";
    if (colors[0].checked) {
        htmlText += "Red";
    } else if (colors[1].checked) {
        htmlText += "Green";
    } else {
        htmlText += "None";
    }
    document.querySelector('output').innerHTML = htmlText;
}
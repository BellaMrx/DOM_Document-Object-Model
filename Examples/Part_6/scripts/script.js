"use strict";

function getColor() {
    let colors = document.getElementsByName('color');
    let htmlText = "Colors to choose : " + colors.length +
        "<br>You have chosen  :";
    if (colors[0].checked) {
        htmlText += " Red";
    } else if (colors[1].checked) {
        htmlText += " Green";
    } else {
        htmlText += "None";
    }
    document.querySelector('output').innerHTML = htmlText;
}
"use strict";

let plainText = "";
let pElements = document.getElementsByTagName('p');
for (let i = 0; i < pElements.length; i++) {
    plainText += pElements[i].innerHTML + '\n';
}
console.log(plainText);     // output for demonstration

let htmlText = "p elements in the document: " + pElements.length + "<br>";
let articleElements = document.getElementById('lead');
let articlePElements;
if (articleElements) {
    articlePElements = articleElements.getElementsByTagName('p');
    htmlText += "Of which is contained in the article element: " + articlePElements.length + "<br>";
}

htmlText += "The second paragraph in the article reads: " + articlePElements[1].innerHTML;

document.querySelector('output').innerHTML = htmlText;
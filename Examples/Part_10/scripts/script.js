"use strict";

let hyperlinks = document.links;
let text = "";
for (let i = 0; i < hyperlinks.length; i++) {
    text += i + 1 + ". Link: " + hyperlinks[i].innerHTML + "<br>";
}
document.querySelector('output').innerHTML = text;
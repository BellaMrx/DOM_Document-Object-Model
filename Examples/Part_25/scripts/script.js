"use strict";

let root = document.querySelector('.article-01');
if (root) {
    let traverse = root.childNodes;
    let text = traverse.length + " Elements in " +
        root.nodeName + " contain:" + "<ol>";
    for (var i = 0; i < traverse.length; i++) {
        text += "<li>" + "<b>nodeName</b>: " + traverse[i].nodeName +
            "; <b>nodeType</b>: " + traverse[i].nodeType;
        if (traverse[i].firstChild != null) {
            text += "; <b>nodeValue:</b> " + traverse[i].firstChild.nodeValue;
        }
        text += '</li>';
    }
    text += "</ol>" + "Parent node: " + root.parentNode.nodeName;
    document.querySelector('#result').innerHTML = text;
} else {
    alert("No child nodes available!!!");
}
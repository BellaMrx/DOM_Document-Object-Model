"use strict";

let counter = 0;
document.querySelector('#replace').onclick = function() {
    let h_new = document.createElement("h1");
    let t_new = document.createTextNode("Article " + ++counter + ": New headline");
    h_new.appendChild(t_new); // <p>A new paragraph</p>

    let root = document.querySelector('.article-01');
    if (root) {
        let traverse = root.childNodes;
        for (let i = 0; i < traverse.length; i++) {
            if (traverse[i].nodeName == "H1") {
                root.replaceChild(h_new, traverse[i]);
                break; // End loop
            }
        }
    }
}
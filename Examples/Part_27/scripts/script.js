"use strict";

document.querySelector('#add').onclick = function() {
    let p_new = document.createElement("p");
    let t_new = document.createTextNode("A new paragraph");
    p_new.appendChild(t_new);

    let root = document.querySelector('.article-01');
    if (root) {
        let traverse = root.childNodes;
        for (let i = 0; i < traverse.length; i++) {
            if (traverse[i].nodeName == "H1") {
                root.insertBefore(p_new, traverse[i].nextSibling);
                break; // End loop
            }
        }
    }
}
"use strict";

document.querySelector('#remove').onclick = function() {
    let root = document.querySelector('.article-01');
    if (root) {
        let traverse = root.childNodes;
        for (let i = 0; i < traverse.length; i++) {
            if (traverse[i].nodeName == "P") {
                root.removeChild(traverse[i]);
                break; // End loop
            }
        }
    }
}
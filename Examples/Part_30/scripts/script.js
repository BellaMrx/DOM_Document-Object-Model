"use strict";

document.querySelector('#clone').onclick = function() {
    let root = document.querySelector('.article-01');
    if (root) {
        let new_root = root.cloneNode(true);
        new_root.setAttribute("class", "article-02");
        let button = document.querySelector('#clone');
        root.parentNode.insertBefore(new_root, button);
        button.parentNode.removeChild(button);
    }
}
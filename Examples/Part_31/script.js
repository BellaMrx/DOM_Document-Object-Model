"use strict";

document.querySelector('#set').onclick = function() {
    let root = document.querySelector('#article-01');
    if (root) {
        root.setAttribute("class", "demo");
    }
}

document.querySelector('#copy').onclick = function() {
    let root1 = document.querySelector('#article-01');
    if (root1) {
        let art01_style = root1.getAttribute("class");
        if (art01_style != null) {
            let root2 = document.querySelector('#article-02');
            if (root2) {
                root2.setAttribute("class", art01_style);
            }
        }
    }
}

document.querySelector('#remove').onclick = function() {
    let root1 = document.querySelector('#article-01');
    if (root1) {
        root1.removeAttribute("class");
    }
    let root2 = document.querySelector('#article-02');
    if (root2) {
        root2.removeAttribute("class");
    }
}
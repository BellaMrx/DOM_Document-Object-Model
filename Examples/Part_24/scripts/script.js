"use strict";

document.querySelector('#new-p').onclick = function() {
    let p_new = document.createElement("p");    // Creates new node <p>...</p>
    let t_new = document.createTextNode("A new paragraph");     // Creates the text content "A new paragraph"
    p_new.appendChild(t_new);   // Created node is included in the DOM tree <p>A new paragraph</p>

    document.querySelector('.article-01').appendChild(p_new);
}
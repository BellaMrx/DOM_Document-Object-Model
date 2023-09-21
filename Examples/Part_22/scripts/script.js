"use script";

function get_mouse_p(ev) {
    alert("Mouse button pressed in p!");
    if (ev.stopPropagation) {
        ev.stopPropagation();
    }
}

function get_mouse_article() {
    alert("Mouse button pressed in article!");
}
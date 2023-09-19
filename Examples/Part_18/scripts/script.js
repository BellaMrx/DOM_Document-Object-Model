function show_pos(ev) {
    let x = ev.clientX;
    let y = ev.clientY;
    let text = "Pos-X: " + x + " / Pos-Y: " + y;
    if (ev.shiftKey == true) {
        text += " / (Shift) key has been pressed down!";
    } else {
        text += " / (Shift) key has not been pressed down!";
    }
    text += " -> Mouse button: " + ev.button;
    document.querySelector('output').innerHTML = text;
    console.log(ev);
}

function keystroke(ev) {
    let text = "Key code: " + ev.keyCode + "=" + String.fromCharCode(ev.keyCode);
    document.querySelector('output').innerHTML = text;
}
"use strict";

function progress() {
    let fields = 0;
    for (let i = 0; i < document.forms[0].elements.length; i++) {
        if (document.forms[0].elements[i].value != '')
        fields++;
    }
    document.querySelector('#bar').value = fields;
    document.querySelector('#bar').innerHTML = "Progress (" + fields + " from 3): ";
}
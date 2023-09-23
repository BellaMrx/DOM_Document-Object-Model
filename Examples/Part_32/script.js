"use strict";

document.addEventListener('DOMContentLoaded', addData);

function addData() {
    let data = [
        ['12:00', 'Monday', 'JS course in Frankfurt'],
        ['19:00', 'Monday', 'Sports'],
        ['09:00', 'Tuesday', 'Meeting with client'],
        ['12:00', 'Tuesday', 'Lunch with staff'],
        ['15:00', 'Wednesday', 'Teammeeting']
    ];

    let t = document.querySelector('#template-row');
    td = t.content.querySelectorAll('td');

    data.forEach(function(dataRow) {
        td[0].textContent = dataRow[0];
        td[1].textContent = dataRow[1];
        td[2].textContent = dataRow[2];

        let tb = document.querySelector('tbody');
        let clone = document.importNode(t.content, true);
        tb.appendChild(clone);

    });
}
'use strict'

window.onload = () => {
    console.log('loaded');
}

let list = JSON.parse(localStorage.getItem('list'));

let html = `<ul class="list-group">`;
for(let student of list){
    html += `<li href="#" class="list-group-item">${student.name}</li>`;
}

html += `<div>`;

document.getElementById('list').innerHTML = html;
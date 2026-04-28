let title = document.getElementById('title');
let content = document.getElementById('content');
let notes = [];

function addNote() {    
    notes.push({
        title: title.value,
        content: content.value,
    })    
}
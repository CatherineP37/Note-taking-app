let notes = [];
let noteInput = document.getElementById('note');
let noteList = document.getElementById('note_list');

function addNote() {
  let noteInputValue = noteInput.value;  
  notes.push(noteInputValue);  
}

console.log(notes);

addNote();




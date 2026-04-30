let notes = []
let noteInput = document.getElementById('note_input');
let noteList = document.getElementById('note_list');

function displayList() {
  taskList.innerHTML = null;
  for(const[idx, item] of Object.entries(tasks)) {
    const container = document.createElement('div');    
    taskList.appendChild(container);
  }
}

function addNote() {
  let noteInputValue = noteInput.value;  
  notes.push(noteInputValue);
  displayList();
  noteInput.value = ''; 
}

document.addEventListener("DOMContentLoaded", displayList)



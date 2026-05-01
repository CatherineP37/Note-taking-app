let notes = []
let noteInput = document.getElementById('note_input');
let noteList = document.getElementById('note_list');

function displayList() {
  noteList.innerHTML = null;
  for(const[i, note] of Object.entries(notes)) {
    const container = document.createElement('div');
    container.className = 'note-container';
    const p = document.createElement('p');
    p.className = 'note-content';
    p.textContent = note;
    container.append(p);
    noteList.append(container);
  }
}

function addNote() {
  let noteInputValue = noteInput.value;  
  notes.push(noteInputValue);
  displayList();
  noteInput.value = ''; 
}

document.addEventListener("DOMContentLoaded", displayList)



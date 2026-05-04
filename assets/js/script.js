let notes = []
let noteInput = document.getElementById('note_input');
let editInput = document.getElementById('edit_input');
let editButton = document.getElementById('edit_button');
let noteList = document.getElementById('note_list');
let modal = document.querySelector('.modal');
let noteId = null;

function openModal() {
  modal.classList.toggle('open');
}

function displayList() {
  noteList.innerHTML = null;
  for(const[i, note] of Object.entries(notes)) {
    const container = document.createElement('div');
    container.className = 'note-container';
    const p = document.createElement('p');
    p.className = 'note-content';
    p.textContent = note.content;
    container.append(p);
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'EDIT';
    editButton.onclick = () => openModal(i, note);
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'DELETE';
    deleteButton.onclick = () => deleteNote(i);   
    buttonContainer.append(editButton);
    buttonContainer.append(deleteButton);
    container.append(buttonContainer);
    noteList.append(container);
  }
}

function saveNote() { 
  let noteInputValue = noteInput.value;  
  notes.push({
    id: makeId(),
    content: noteInputValue,
  });
  displayList();
  noteInput.value = ''; 
}

function makeId() {
  return Date.now().toString();
}

function editNote(i, note) {
  const noteIndex = notes.findIndex(note => note.id === noteId)    
  notes[noteIndex] = {
    ...notes[noteIndex],
    content: content,
  };
  displayList();
}

function deleteNote(i) {
  notes.splice(i, 1);
  displayList();
}

document.addEventListener("DOMContentLoaded", displayList)



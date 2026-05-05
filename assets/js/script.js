let notes = []
let noteInput = document.getElementById('note_input');
let editInput = document.getElementById('edit_input');
let editButton = document.getElementById('edit_button');
let noteList = document.getElementById('note_list');
let noteIndex = null;
let addModal = document.getElementById('add-modal');
let editModal = document.getElementById('edit-modal');

function saveNote() { 
  let noteInputValue = noteInput.value;  
  notes.push(noteInputValue);
  displayNotes();
  noteInput.value = ''; 
}

function deleteNote(i) {
  notes.splice(i, 1);
  displayNotes();
}

function displayNotes() {
  noteList.innerHTML = null;
  notes.forEach((note, i) => {
     const container = document.createElement('div');
    container.className = 'note-container';
    const p = document.createElement('p');
    p.className = 'note-content';
    p.textContent = note;
    container.append(p);
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'EDIT';
    editButton.onclick = () => editNote(i);
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'DELETE';
    deleteButton.onclick = () => deleteNote(i);   
    buttonContainer.append(editButton);
    buttonContainer.append(deleteButton);
    container.append(buttonContainer);
    noteList.append(container);
  })
   
  
}

function editNote(i, note) {
  editModal.classList.add('open');
  document.getElementById('edit_input').value = note;
}

function openAddModal() {
  addModal.classList.add('open');  
}

function closeAddModal() {
 addModal.classList.remove('open');
}

function closeEditModal() {
  editModal.classList.remove('open');
}

document.addEventListener("DOMContentLoaded", displayNotes)



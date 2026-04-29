let notes = [];
let noteInput = document.getElementById('note');
let noteList = document.getElementById('note_list');

function displayNotes() {
    noteList.innerHTML = null;
    for(const[idx, note] of Object.entries(notes)) {
        const container = document.createElement('div');
        container.className = 'note-container';               
        const noteContent = document.createElement('p');
        noteContent.className = 'note-content';
        noteContent.textContent = note;
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';
        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.textContent = 'EDIT';
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'DELETE';
        buttonContainer.append(editButton);
        buttonContainer.append(deleteButton);        
        container.append(noteContent);
        container.append(buttonContainer);
        noteList.append(container);
    }
}

function addNote() {
    let noteInputValue = noteInput.value;
    notes.push(noteInputValue);  
    displayNotes();  
    noteInput.value = "";  
}

console.log(notes);

document.addEventListener("DOMContentLoaded", displayNotes)
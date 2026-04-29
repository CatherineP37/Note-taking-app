let notes = [];
let noteInput = document.getElementById('note');
let noteList = document.getElementById('note_list');

function addNote() {
    let noteValue = noteInput.value;
    notes.push(noteValue);  
    displayNotes();  
    noteInput.value = '';  
}

function displayNotes() {
    notes.forEach((note, noteIndex) => {
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
        container.append(noteTitle);
        container.append(noteContent);
        container.append(buttonContainer);
        notesList.append(container);
    })
}

console.log(notes);
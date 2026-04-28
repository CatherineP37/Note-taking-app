let title = document.getElementById('title');
let content = document.getElementById('content');
const notesList = document.getElementById('note_list');
let notes = [];

function addNote() {    
    notes.push({
        title: title.value,
        content: content.value,
    })    
}

function displayNotes() {
    notes.forEach((note, noteIndex) => {
        const container = document.createElement('div');
        container.className = 'note-container';
        const noteTitle = document.createElement('h2');
        noteTitle.className = 'note-title';
        noteTitle.textContent = note.title;        
        const noteContent = document.createElement('p');
        noteContent.className = 'note-content';
        noteContent.textContent = note.content;
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
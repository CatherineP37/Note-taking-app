const title = document.getElementById('title');
const content = document.getElementById('content');
const notesList = document.getElementById('note_list');
let notes = [];

function addNote() {
    const titleValue = title.value;
    const contentValue = content.value; 
    notes.push({
        title: titleValue,
        content: contentValue,
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
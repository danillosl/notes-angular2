import { Component } from '@angular/core';

@Component({
    selector: 'note-container',
    templateUrl: './note-container.component.html',
    styleUrls: ['./note-container.component.css']
})

export class NoteContainer {

    notes = [
        { title: "chores", value: "Clean up", color: 'lightblue' },
        { title: "Cook", value: "Cook dinner", color: 'red' },
        { title: "Dog", value: "Walk with the dog", color: 'yellow' },
        { title: "Github", value: "Create project on github", color: 'BlueViolet' }

    ];

    onNoteChecked(note) {
        this.notes.splice(this.notes.indexOf(note), 1);
    }

    onNoteCreated(note) {
        this.notes.push(note);
    }

}
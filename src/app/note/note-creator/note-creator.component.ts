import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    templateUrl: './note-creator.component.html',
    styleUrls: ['./note-creator.component.css']
})

export class NoteCreator {

    newNote: any = {};
    colors: string[];

    constructor() {
        this.colors = ['#ffffff', '#0B99BC', '#5C2D50', '#D40E52', '#CD1719', '#FCE014', '#69D2E7', '#1FDA9A'];
        this.newNote = this.createCleanNote();
    }

    @Output() create: EventEmitter<any> = new EventEmitter();

    onCreate() {
        if (this.newNote.title && this.newNote.value) {
            this.create.next(this.newNote);
        }
        this.newNote = this.createCleanNote();
    }

    createCleanNote() : any{
        return {title:  '', value: '', color: this.colors[0]};
    }

    onColorSelected(color: string) {
        this.newNote.color = color;
    }


}
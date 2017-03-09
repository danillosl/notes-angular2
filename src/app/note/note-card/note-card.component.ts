import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-card',
    templateUrl: './note-card.component.html',
    styleUrls: ['./note-card.component.css']
})

export class NoteCard {

    @Input() note: any = {};
    @Output() checked : EventEmitter<any> = new EventEmitter();
    showChecked: boolean = false;

    onChecked() {
        this.checked.next(this.note);
    }

    toggleCheck() {
        this.showChecked = !this.showChecked;
    }

}
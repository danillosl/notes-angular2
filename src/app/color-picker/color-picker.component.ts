import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector:'color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls : ['./color-picker.component.css']
})

export class ColorPicker {

    @Input() colors: string[] =[];
    @Output() selected :EventEmitter<any> = new EventEmitter();

    isColorPickerVisible: boolean = false;

    onSelectColor(color:string){
        this.selected.emit(color);
        this.showSelector(false);
    }

    showSelector(value: boolean){
        this.isColorPickerVisible = value;
    }
    
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppBar } from './app-bar/app-bar.component';
import { ColorPicker } from './color-picker/color-picker.component';
import { AppComponent } from './main/main.component';
import { NoteCard, NoteContainer, NoteCreator } from './note/index';

@NgModule({
  declarations: [
    AppComponent, AppBar, NoteCard, NoteContainer, NoteCreator, ColorPicker
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

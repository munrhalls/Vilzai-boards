import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardsMenuComponent } from './header/boards-menu/boards-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardsMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

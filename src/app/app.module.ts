import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardsMenuComponent } from './header/boards-menu/boards-menu.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { BoardComponent } from './board/board.component';
import { BoardHeaderComponent } from './board/board-header/board-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardsMenuComponent,
    UserMenuComponent,
    BoardComponent,
    BoardHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

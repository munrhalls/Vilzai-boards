import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../server/firebase';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardsMenuComponent } from './header/boards-menu/boards-menu.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { BoardComponent } from './board/board.component';
import { BoardHeaderComponent } from './board/board-header/board-header.component';
import { BoardMenuComponent } from './board/board-header/board-menu/board-menu.component';
import { BoardEditComponent } from './board/board-edit/board-edit.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardsMenuComponent,
    UserMenuComponent,
    BoardComponent,
    BoardHeaderComponent,
    BoardMenuComponent,
    BoardEditComponent,
    WelcomeComponent,
    AuthenticationComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

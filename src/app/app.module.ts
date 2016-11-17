import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import { KeeperNavbarComponent } from './keeper-navbar/keeper-navbar.component';
import { FileDropDirective } from './framework/file-drop.directive';

export const firebaseConfig = {
  apiKey: "AIzaSyDFRaD5M1zMPRKHQj5oshYLcyVa-cqq_Gw",
  authDomain: "translation-5c988.firebaseapp.com",
  databaseURL: "https://translation-5c988.firebaseio.com",
  storageBucket: "translation-5c988.appspot.com"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    KeeperNavbarComponent,
    FileDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';

import {AppComponent} from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

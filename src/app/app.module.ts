import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
const firebaseConfig = {
  apiKey: "AIzaSyBTEHxVvQ3LmoFSCpsmAKRV4AgvOhYfwBE",
  authDomain: "simplytutor-2f4a0.firebaseapp.com",
  projectId: "simplytutor-2f4a0",
  storageBucket: "simplytutor-2f4a0.appspot.com",
  messagingSenderId: "686061012621",
  appId: "1:686061012621:web:eb268fe82ea6f021c0c4c4",
  measurementId: "G-VS5Z3WD3TQ"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

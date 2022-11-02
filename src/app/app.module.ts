import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './componentes/list/list.component';
import { ListAddingComponent } from './componentes/list-adding/list-adding.component';

import { ConnectionService } from './servicios/connection.service';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListAddingComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp( environment.firebase )),
    provideFirestore(() => getFirestore()),
    FontAwesomeModule, 
    FormsModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
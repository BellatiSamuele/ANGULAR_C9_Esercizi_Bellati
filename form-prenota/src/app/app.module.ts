import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormCampoComponent } from './form-campo/form-campo.component';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
import { PrenotaViewComponent } from './prenota-view/prenota-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCampoComponent,
    PrenotaViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //Anche qui
   ReactiveFormsModule,
   NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

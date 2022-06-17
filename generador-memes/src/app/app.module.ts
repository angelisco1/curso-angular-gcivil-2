import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaMemesComponent } from './lista-memes/lista-memes.component';
import { MemeComponent } from './meme/meme.component';
import { FormMemeComponent } from './form-meme/form-meme.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfoMemeComponent } from './info-meme/info-meme.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaMemesComponent,
    MemeComponent,
    FormMemeComponent,
    ErrorComponent,
    InfoMemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

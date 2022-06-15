import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaMemesComponent } from './lista-memes/lista-memes.component';
import { MemeComponent } from './meme/meme.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMemesComponent,
    MemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

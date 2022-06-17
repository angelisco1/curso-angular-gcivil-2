import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormMemeComponent } from "./form-meme/form-meme.component";
import { InfoMemeComponent } from "./info-meme/info-meme.component";
import { ListaMemesComponent } from "./lista-memes/lista-memes.component";

const APP_ROUTES: Routes = [
  { path: 'memes', component: ListaMemesComponent },
  { path: 'memes/:idMeme', component: InfoMemeComponent },
  { path: 'memes/:idMeme/editar', component: FormMemeComponent },
  { path: 'nuevo-meme', component: FormMemeComponent },
  { path: '', redirectTo: 'memes', pathMatch: 'full' }
]

export const AppRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES)
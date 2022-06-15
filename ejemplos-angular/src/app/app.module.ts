import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02DirectivasComponent } from './cmp02-directivas/cmp02-directivas.component';
import { MarcarDirective } from './cmp02-directivas/marcar.directive';
import { Cmp03InputYOutputComponent } from './cmp03-input-y-output/cmp03-input-y-output.component';
import { SugusComponent } from './cmp03-input-y-output/sugus/sugus.component';
import { CvFormComponent } from './cmp03-input-y-output/cv-form/cv-form.component';
import { CvPreviewComponent } from './cmp03-input-y-output/cv-preview/cv-preview.component';
import { Cmp04PipesComponent } from './cmp04-pipes/cmp04-pipes.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DescuentoPipe } from './cmp04-pipes/descuento.pipe';
import { Cmp05ReferenciasComponent } from './cmp05-referencias/cmp05-referencias.component';
import { ModalComponent } from './cmp05-referencias/modal/modal.component';
import { Cmp07FormulariosComponent } from './cmp07-formularios/cmp07-formularios.component';
import { ReactivoComponent } from './cmp07-formularios/reactivo/reactivo.component';
import { PlantillaComponent } from './cmp07-formularios/plantilla/plantilla.component';


registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,
    Cmp01DataBindingComponent,
    Cmp02DirectivasComponent,
    MarcarDirective,
    Cmp03InputYOutputComponent,
    SugusComponent,
    CvFormComponent,
    CvPreviewComponent,
    Cmp04PipesComponent,
    DescuentoPipe,
    Cmp05ReferenciasComponent,
    ModalComponent,
    Cmp07FormulariosComponent,
    ReactivoComponent,
    PlantillaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

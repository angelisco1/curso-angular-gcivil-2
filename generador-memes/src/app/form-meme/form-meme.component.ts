import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Meme } from '../models/meme';
import { MemesService } from '../services/memes.service';

@Component({
  selector: 'app-form-meme',
  templateUrl: './form-meme.component.html',
  styleUrls: ['./form-meme.component.css']
})
export class FormMemeComponent implements OnInit {
  formMeme: FormGroup
  id: string | null = ''
  editando: boolean = false

  constructor(
    private memesService: MemesService,
    private router: Router,
    private route: ActivatedRoute) {

    this.formMeme = this.crearFormulario(new Meme('', '', '', '', 1))

  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const id = params.get('idMeme')
        if (id) {
          this.editando = true
          this.id = id

          this.memesService.getMemeById(this.id)
            .subscribe((datosMeme: any) => {
              const { urlImagen, texto1, texto2, color, usuarioId } = datosMeme
              this.formMeme = this.crearFormulario(new Meme(urlImagen, texto1, texto2, color, usuarioId))
            })

        }
      })
  }

  guardar() {
    if (this.editando) {
      this.memesService.updateMeme(this.id!, this.formMeme.value)
        .subscribe(() => {
          this.router.navigate(['/memes', this.id])
        })
    } else {
      this.memesService.createMeme(this.formMeme.value)
        .subscribe(() => {
          this.router.navigateByUrl('/memes')
          // this.router.navigate(['/memes', id, 'editar'])
        })
    }
  }

  private crearFormulario(meme: Meme) {
    return new FormGroup({
      texto1: new FormControl(meme.texto1),
      texto2: new FormControl(meme.texto2),
      color: new FormControl(meme.color),
      urlImagen: new FormControl(meme.urlImagen),
      usuarioId: new FormControl(meme.usuarioId), // Este 1 habría que cambiarlo por el id del usuario logueado
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Meme } from '../models/meme';
import { MemesService } from '../services/memes.service';

@Component({
  selector: 'app-info-meme',
  templateUrl: './info-meme.component.html',
  styleUrls: ['./info-meme.component.css']
})
export class InfoMemeComponent implements OnInit {
  id: string | null = ''
  meme: Meme | null = null
  usuario: string = ''

  constructor(private route: ActivatedRoute, private memesService: MemesService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.id = params.get('idMeme')
        if (this.id) {
          this.memesService.getMemeById(this.id)
            .subscribe((infoMeme: any) => {
              // console.log({ infoMeme })
              this.usuario = infoMeme.usuario.nombre
              this.meme = infoMeme
            })
        }
      })
  }

}

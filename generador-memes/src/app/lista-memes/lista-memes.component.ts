import { Component, Input, OnInit } from '@angular/core';
import { Meme } from '../models/meme';

@Component({
  selector: 'app-lista-memes',
  templateUrl: './lista-memes.component.html',
  styleUrls: ['./lista-memes.component.css']
})
export class ListaMemesComponent implements OnInit {

  memes: Array<Meme> = [
    new Meme('https://i.blogs.es/d86db0/meme-fry-1/450_1000.jpg', 'aaa', 'bbb', 1, '#000000'),
    new Meme('https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1752/public/media/image/2018/03/economia-meme.jpeg?itok=3qh_FSzo', 'aaa', 'bbb', 2, '#ffffff'),
    new Meme('https://i.blogs.es/d86db0/meme-fry-1/450_1000.jpg', 'aaa', 'bbb', 3, '#ffffff')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

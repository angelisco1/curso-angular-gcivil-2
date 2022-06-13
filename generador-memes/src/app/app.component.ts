import { Component } from '@angular/core';
import { Meme } from './models/meme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generador-memes';

  // Esto iría en el componente de la lista de memes
  memes: Array<Meme> = [
    new Meme('https://i.blogs.es/d86db0/meme-fry-1/450_1000.jpg', '', '', 1),
    new Meme('https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1752/public/media/image/2018/03/economia-meme.jpeg?itok=3qh_FSzo', '', '', 2),
    new Meme('https://i.blogs.es/d86db0/meme-fry-1/450_1000.jpg', '', '', 3)
  ]
}

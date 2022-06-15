import { Component, Input, OnInit } from '@angular/core';
import { Meme } from '../models/meme';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() meme: Meme | null = null
  constructor() { }

  ngOnInit(): void {
  }

}

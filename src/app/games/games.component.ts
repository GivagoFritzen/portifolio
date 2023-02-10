import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  slides: any[] = new Array(4).fill({ id: -1, src: '', title: 'Teste1', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    new Splide('.splide', {
      type: 'loop',
      perPage: this.slides.length,
      focus: 'center',
    }).mount();
  }
}

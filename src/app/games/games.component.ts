import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { GameModel } from 'src/models/game.model';
import { slider } from '../../utils/animations/slide-animation';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent {
  slides: GameModel[] = [
    { src: '', title: 'Teste1', subtitle: 'a' },
    { src: '', title: 'Teste2', subtitle: 'b' },
    { src: '', title: 'Teste3', subtitle: 'c' },
    { src: '', title: 'Teste4', subtitle: 'd' }
  ];

  carouselBanner: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 1,
    speed: 400,
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    load: 2,
    custom: 'banner',
    loop: true,
    touch: true,
  };

  /* It will be triggered on every slide*/
  onmoveFn(data: any) {
    console.log(typeof (data));
  }

  trackCarousel(_: any, item: any) {
    return item;
  }
}

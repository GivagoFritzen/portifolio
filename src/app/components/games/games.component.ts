import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { slides } from './games';
import { slider } from '../../../utils/animations/slide-animation';
import { GameModel } from 'src/models/game.model';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent {
  slides: GameModel[] = slides;

  showGame: boolean = false;
  currentGame: GameModel = new GameModel();

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

  }

  trackCarousel(_: any, item: any) {
    return item;
  }

  seeMore(game: GameModel): void {
    this.currentGame = game;
    this.showGame = true;
  }

  closeModal = (): void => {
    this.showGame = false;
  }
}

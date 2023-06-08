import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { slides } from './games';
import { slider } from '../../../utils/animations/slide-animation';
import { GameModel } from 'src/models/game.model';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent {
  slides: GameModel[] = slides;

  showQuantitySlide: number = 0;
  showGame: boolean = false;
  currentGame: GameModel = new GameModel();

  carouselBanner: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
    slide: 1,
    speed: 400,
    interval: {
      timing: 4000,
      initialDelay: 0
    },
    loop: true,
    touch: true,
  };

  constructor() {
    const mediaSlide = 480;
    this.showQuantitySlide = Math.floor(window.innerWidth / mediaSlide);
    this.carouselBanner.grid.lg = this.showQuantitySlide;
  }

  ngAfterViewInit(): void {
    this.scrollRevealEffect('#games h1');
    this.scrollRevealEffect('.carousel');
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: any): void {

  }

  trackCarousel(_: any, item: any): void {
    return item;
  }

  seeMore(game: GameModel): void {
    this.currentGame = game;
    this.showGame = true;
  }

  closeModal = (): void => {
    this.showGame = false;
  }

  private scrollRevealEffect(name: string): void {
    ScrollReveal().reveal(name, {
      distance: '50px',
      duration: 2000,
      origin: 'bottom',
      reset: false
    });
  }
}

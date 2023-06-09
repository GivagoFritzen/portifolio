import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameModel } from 'src/models/game.model';
import { slides } from './games';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
    slides: GameModel[] = slides;

    showGame: boolean = false;

    private currentIndex: number = 0;
    currentGame: GameModel = new GameModel();

    private readonly interval = 2000;
    private timer: any;

    constructor() {
    }

    ngOnInit() {
        this.startTimer();
    }

    ngOnDestroy() {
        clearInterval(this.timer);
    }

    ngAfterViewInit(): void {
        this.nextSlide();
        this.scrollRevealEffect('#games h1');
        this.scrollRevealEffect('.carousel');
    }

    private startTimer() {
        this.timer = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.adjustSlidePosition();
        this.restartTimer();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.adjustSlidePosition();
        this.restartTimer();
    }

    seeMore(game: GameModel): void {
        this.currentGame = game;
        this.showGame = true;
    }

    closeModal = (): void => {
        this.showGame = false;
    }

    private restartTimer() {
        clearInterval(this.timer);
        this.startTimer();
    }

    private scrollRevealEffect(name: string): void {
        ScrollReveal().reveal(name, {
            distance: '50px',
            duration: 2000,
            origin: 'bottom',
            reset: false
        });
    }

    private adjustSlidePosition() {
        const games = document.getElementsByClassName('game') as HTMLCollectionOf<HTMLElement>;

        for (var i = 0; i < games.length; i++) {
            games[i].style.transform = `translateX(${(i - this.currentIndex) * 50}%)`;
        }
    }
}
import { Component, OnDestroy, OnInit, HostListener, ElementRef } from '@angular/core';
import { GameModel } from 'src/models/game.model';
import { slides } from './games';
import Hammer from 'hammerjs';

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

    private touchStartX: number = 0;
    private touchEndX: number = 0;
    private swipeThreshold: number = 50;

    constructor(private elementRef: ElementRef) {
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
        this.configTouch();
    }

    @HostListener('touchstart', ['$event'])
    onTouchStart(event: TouchEvent) {
        this.touchStartX = event.touches[0].clientX;
    }

    @HostListener('touchend', ['$event'])
    onTouchEnd(event: TouchEvent) {
        this.touchEndX = event.changedTouches[0].clientX;
        this.handleSwipe();
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

    private configTouch(): void {
        const element = this.elementRef.nativeElement;
        const hammer = new Hammer(element);
        hammer.on('swipeleft', () => this.nextSlide());
        hammer.on('swiperight', () => this.prevSlide());
    }

    private startTimer(): void {
        this.timer = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }

    private restartTimer(): void {
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

    private adjustSlidePosition(): void {
        const games = document.getElementsByClassName('game') as HTMLCollectionOf<HTMLElement>;

        for (var i = 0; i < games.length; i++) {
            games[i].style.transform = `translateX(${(i - this.currentIndex) * 50}%)`;
        }
    }

    private handleSwipe(): void {
        const swipeDistance = this.touchEndX - this.touchStartX;

        if (swipeDistance > this.swipeThreshold) {
            this.prevSlide();
        } else if (swipeDistance < -this.swipeThreshold) {
            this.nextSlide();
        }
    }
}
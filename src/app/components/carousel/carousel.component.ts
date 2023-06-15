import { Component, OnDestroy, HostListener, ElementRef, ChangeDetectorRef } from '@angular/core';
import { GameModel } from 'src/models/game.model';
import { slides } from './games';
import Hammer from 'hammerjs';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnDestroy {
    showGame: boolean = false;
    stopCarousel: boolean = false;
    slides: GameModel[] = slides;
    currentIndex: number = 0;
    currentGame: GameModel = new GameModel();

    private readonly interval = 2000;
    private timer: any;

    private touchStartX: number = 0;
    private touchEndX: number = 0;
    private swipeThreshold: number = 50;

    private games: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('game') as HTMLCollectionOf<HTMLElement>;
    private carousel: HTMLCollectionOf<Element> = document.getElementsByClassName('carousel');

    constructor(private elementRef: ElementRef, private cdref: ChangeDetectorRef) {
    }

    ngOnDestroy() {
        clearInterval(this.timer);
    }

    ngAfterViewInit(): void {
        this.nextSlide();
        this.scrollRevealEffect('#games h1');
        this.scrollRevealEffect('.carousel');
        this.configTouch();
        this.cdref.detectChanges();
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
        this.currentIndex = ((this.currentIndex + 1) % this.slides.length);

        if (this.currentIndex < this.slides.length - this.getCurrentAutoColumns() + 1) {
            this.adjustSlidePosition();
            this.restartTimer();
        }
    }

    seeMore(game: GameModel): void {
        this.currentGame = game;
        this.showGame = true;
        this.stopCarousel = true;
    }

    closeModal = (): void => {
        this.showGame = false;
        this.stopCarousel = false;
    }

    goToSlide(index: number): void {
        this.currentIndex = index;
        this.adjustSlidePosition();
        this.restartTimer();
    }

    private configTouch(): void {
        const element = this.elementRef.nativeElement;
        const hammer = new Hammer(element);
        hammer.on('swipeleft', () => this.nextSlide());
        hammer.on('swiperight', () => this.prevSlide());
    }

    private startTimer(): void {
        this.timer = setInterval(() => {
            if (!this.stopCarousel)
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
        if (this.stopCarousel)
            return;

        for (var i = 0; i < this.games.length; i++) {
            this.games[i].style.transform = `translateX(-${(this.currentIndex) * 100}%)`;
        }
    }

    private getCurrentAutoColumns(): number {
        const gridAutoColumns = window.getComputedStyle(this.carousel[0]).getPropertyValue("grid-auto-columns");
        return Math.round(100 / parseFloat(gridAutoColumns));
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
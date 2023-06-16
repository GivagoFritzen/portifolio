import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { gsap, Linear } from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Position } from 'src/models/position.model';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  FIRSTNUMBER?: HTMLElement | null;
  SECONDNUMBER?: HTMLElement | null;
  THIRDNUMBER?: HTMLElement | null;
  SPACETEXT?: HTMLElement | null;

  DURATION = 250;

  SENTENCES: string[] = [
    "not-found.here",
    "not-found.lost",
    "not-found.rich",
    "not-found.gps",
    "not-found.places",
    "not-found.not-right",
    "not-found.never"
  ];

  constructor(private translateService: TranslateService) {
    translateService.onLangChange.subscribe(() => {
      this.setSpaceTextByLanguage();
    })
  }

  ngOnInit(): void {
    gsap.registerPlugin(MotionPathPlugin);

    this.FIRSTNUMBER = document.querySelector("#first-number");
    this.SECONDNUMBER = document.querySelector("#second-number");
    this.THIRDNUMBER = document.querySelector("#third-number");
    this.SPACETEXT = document.querySelector("#space-text");

    this.randomAnimate(this.FIRSTNUMBER);
    this.randomAnimate(this.SECONDNUMBER);
    this.randomAnimate(this.THIRDNUMBER);

    this.randomAnimateSpaceText(this.SPACETEXT, this.DURATION);

    this.setSpaceTextByLanguage();
  }

  private randomAnimate(element: HTMLElement | null): void {
    if (element === null)
      return;

    this.randomRotation(element);

    gsap.to(element, {
      duration: this.DURATION,
      immediateRender: true,
      motionPath: {
        path: this.randomPoints(),
        align: "self",
      },
      ease: Linear.easeNone,
      stagger: {
        from: "random",
        each: 0.5,
        repeat: -1,
      },
    }).progress(0.25);
  }

  private randomAnimateSpaceText(element: HTMLElement | null, duration: number = this.DURATION): void {
    if (element === null)
      return;

    this.randomRotation(element);

    gsap.to(element, {
      duration: duration,
      immediateRender: true,
      motionPath: {
        path: this.randomPoints(),
        align: "self",
      },
      ease: Linear.easeNone,
      stagger: {
        from: "random",
        each: 0.5,
        repeat: -1,
      },
    }).progress(0.25);
  }

  private setSpaceTextByLanguage() {
    if (!this.SPACETEXT || !this.SPACETEXT.firstChild)
      return;

    this.SPACETEXT.firstChild.textContent = this.translateService.instant(
      this.SENTENCES[this.randomIntFromInterval(0, this.SENTENCES.length - 1)]
    );
  }

  private randomRotation(element: HTMLElement): void {
    const randomNumber = this.randomIntFromInterval(80, 135);
    gsap.set(element.firstElementChild, { rotation: `random(-${randomNumber}, ${randomNumber})` });

    gsap.to(element.firstElementChild, {
      rotation: `random(['-=${randomNumber}', '+=${randomNumber}'])`,
      duration: 5,
      ease: Linear.easeNone,
      stagger: 0.25,
    }).yoyo(true)
      .repeat(-1);
  }

  private randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private randomPoints(): Position[] {
    const points: Position[] = [];

    const margin = 15;
    const halfScreenWidth = window.innerWidth / 2 - margin;
    const halfScreenHeight = window.innerHeight / 2 - margin;
    for (let i = 0; i < this.randomIntFromInterval(5, 13); i++) {
      points.push({
        x: this.randomIntFromInterval(-halfScreenWidth, halfScreenWidth),
        y: this.randomIntFromInterval(-halfScreenHeight, halfScreenHeight)
      })
    }

    points.unshift(this.getCenterPosition());
    points.push(this.getCenterPosition());

    return points;
  }

  private getCenterPosition(): Position {
    const centerPosition: Position = {
      x: 0,
      y: 0
    };

    return centerPosition;
  }
}

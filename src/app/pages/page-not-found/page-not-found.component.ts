import { Component, OnInit } from '@angular/core';
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

  DURATION: number = 250;

  SENTENCES: string[] = [
    "Rapaz vc se perdeu",
    "Perdemo",
    "Teste"
  ];

  ngOnInit(): void {
    gsap.registerPlugin(MotionPathPlugin);

    this.FIRSTNUMBER = document.querySelector("#first-number");
    this.SECONDNUMBER = document.querySelector("#second-number");
    this.THIRDNUMBER = document.querySelector("#third-number");
    this.SPACETEXT = document.querySelector("#space-text");

    this.randomAnimate(this.FIRSTNUMBER!);
    this.randomAnimate(this.SECONDNUMBER!);
    this.randomAnimate(this.THIRDNUMBER!);

    this.randomAnimateSpaceText(this.SPACETEXT!, this.DURATION);
    this.SPACETEXT!.firstChild!.textContent = this.SENTENCES[this.randomIntFromInterval(0, this.SENTENCES.length - 1)];
  }

  randomAnimate(element: HTMLElement): void {
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

  randomAnimateSpaceText(element: HTMLElement, duration: number = this.DURATION): void {
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

  private randomRotation(element: HTMLElement) {
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

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private randomPoints(): Position[] {
    let points: Position[] = [];

    const margin = 15;
    const halfScreenWidth = window.innerWidth / 2 - margin;
    const halfScreenHeight = window.innerHeight / 2 - margin;
    for (var i = 0; i < this.randomIntFromInterval(5, 13); i++) {
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
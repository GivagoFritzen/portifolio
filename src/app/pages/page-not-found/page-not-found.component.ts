import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  FIRSTNUMBER?: HTMLElement | null;
  SECONDNUMBER?: HTMLElement | null;
  THIRDNUMBER?: HTMLElement | null;

  ngOnInit(): void {
    this.FIRSTNUMBER = document.querySelector("#first-number");
    this.SECONDNUMBER = document.querySelector("#second-number");
    this.THIRDNUMBER = document.querySelector("#third-number");

    this.randomAnimate(this.FIRSTNUMBER!);
    this.randomAnimate(this.SECONDNUMBER!);
    this.randomAnimate(this.THIRDNUMBER!);
  }

  //https://codepen.io/mvaneijgen/pen/qBVozry
  randomAnimate(number: HTMLElement): void {
    /*
        animation-name: spin;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: random(8) + s;
        padding-right: random(15) + px;
    */
    number.style.setProperty(
      'transform', 'rotate(' + Math.floor(Math.random() * 360) + 1 + 'deg) ' +
      'translateX(' + Math.floor(Math.random() * 10) + 'px) ' +
      'translateY(' + Math.floor(Math.random() * 10) + 'px)'
    );
    
    number.style.setProperty(
      'padding-right', Math.floor(Math.random() * 10) * 10 + 'px'
    );

    number.style.setProperty('animation-duration', Math.floor(Math.random() * 5) + 1 + 's');
  }
}

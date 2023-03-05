import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent implements OnInit {
  SENTENCES: string[] = [
    "Twinkle, twinkle, little star",
    "How I wonder what you are",
    "Up above the world so high",
    "Like a diamond in the sky"
  ];

  PART = 0;
  PART_INDEX = 0;

  INTERVAL_VAL: NodeJS.Timer = setInterval(() => {
    clearInterval(this.INTERVAL_VAL);
  }, 50);
  ELEMENT?: Element | null;
  CURSOR?: HTMLElement | null;

  ngOnInit(): void {
    this.ELEMENT = document.querySelector("#text");
    this.CURSOR = document.querySelector("#cursor");

    clearInterval(this.INTERVAL_VAL);
    this.INTERVAL_VAL = setInterval(() => this.EffectType(), 100);
  }

  EffectType(): void {
    const text = this.SENTENCES[this.PART].substring(0, this.PART_INDEX + 1);
    this.ELEMENT!.innerHTML = text;
    this.PART_INDEX++;

    if (text === this.SENTENCES[this.PART]) {
      this.CURSOR!.style.display = 'none';

      clearInterval(this.INTERVAL_VAL);

      setTimeout(() => {
        this.INTERVAL_VAL = setInterval(() => this.EffectDelete(), 50);
      }, 1000);
    }
  }

  EffectDelete(): void {
    const text = this.SENTENCES[this.PART].substring(0, this.PART_INDEX - 1);
    this.ELEMENT!.innerHTML = text;
    this.PART_INDEX--;

    if (text === '') {
      clearInterval(this.INTERVAL_VAL);

      if (this.PART == (this.SENTENCES.length - 1))
        this.PART = 0;
      else
        this.PART++;

      this.PART_INDEX = 0;

      setTimeout(() => {
        this.CURSOR!.style.display = 'inline-block';
        this.INTERVAL_VAL = setInterval(() => this.EffectType(), 100);
      }, 200);
    }
  }
}

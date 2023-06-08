import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent implements OnInit {
  private SENTENCES: string[] = [
    "who.fraseA",
    "who.fraseB"
  ];

  private PART = 0;
  private PART_INDEX = 0;

  private INTERVAL_VAL?: Subscription;
  private ELEMENT?: Element | null;
  private CURSOR?: HTMLElement | null;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.ELEMENT = document.querySelector("#text");
    this.CURSOR = document.querySelector("#cursor");


    if (this.INTERVAL_VAL) {
      this.INTERVAL_VAL.unsubscribe();
    }

    this.INTERVAL_VAL = interval(100).subscribe(() => {
      this.EffectType();
    });
  }

  private EffectType(): void {
    const text = this.translateService.instant(this.SENTENCES[this.PART]).substring(0, this.PART_INDEX + 1);
    this.ELEMENT!.innerHTML = text;
    this.PART_INDEX++;

    if (text === this.translateService.instant(this.SENTENCES[this.PART])) {
      this.CURSOR!.style.display = 'none';

      this.INTERVAL_VAL!.unsubscribe();

      setTimeout(() => {
        this.INTERVAL_VAL = interval(50).pipe(take(Infinity)).subscribe(() => this.EffectDelete());
      }, 1000);
    }
  }

  private EffectDelete(): void {
    const text = this.translateService.instant(this.SENTENCES[this.PART]).substring(0, this.PART_INDEX - 1);
    this.ELEMENT!.innerHTML = text;
    this.PART_INDEX--;

    if (text === '') {
      this.INTERVAL_VAL!.unsubscribe();

      if (this.PART == (this.SENTENCES.length - 1))
        this.PART = 0;
      else
        this.PART++;

      this.PART_INDEX = 0;

      setTimeout(() => {
        this.CURSOR!.style.display = 'inline-block';
        this.INTERVAL_VAL = interval(100).pipe(take(Infinity)).subscribe(() => this.EffectType());
      }, 200);
    }
  }
}

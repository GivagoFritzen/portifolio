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

  // Current sentence being processed
  PART = 0;

  // Character number of the current sentence being processed 
  PART_INDEX = 0;

  INTERVAL_VAL: NodeJS.Timer = setInterval(() => { }, 50);
  ELEMENT?: Element | null;
  CURSOR?: HTMLElement | null;

  ngOnInit(): void {
    this.ELEMENT = document.querySelector("#text");
    this.CURSOR = document.querySelector("#cursor");

    clearInterval(this.INTERVAL_VAL);
    this.INTERVAL_VAL = setInterval(() => this.Type(), 100);
  }

  // Implements typing effect
  Type(): void {
    // Get substring with 1 characater added
    var text = this.SENTENCES[this.PART].substring(0, this.PART_INDEX + 1);
    this.ELEMENT!.innerHTML = text;
    this.PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === this.SENTENCES[this.PART]) {
      // Hide the cursor
      this.CURSOR!.style.display = 'none';

      clearInterval(this.INTERVAL_VAL);

      setTimeout(() => {
        this.INTERVAL_VAL = setInterval(() => this.Delete(), 50);
      }, 1000);

    }
  }

  // Implements deleting effect
  Delete(): void {
    // Get substring with 1 characater deleted
    var text = this.SENTENCES[this.PART].substring(0, this.PART_INDEX - 1);
    this.ELEMENT!.innerHTML = text;
    this.PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
      clearInterval(this.INTERVAL_VAL);

      // If current sentence was last then display the first one, else move to the next
      if (this.PART == (this.SENTENCES.length - 1))
        this.PART = 0;
      else
        this.PART++;

      this.PART_INDEX = 0;

      // Start to display the next sentence after some time
      setTimeout(() => {
        this.CURSOR!.style.display = 'inline-block';
        this.INTERVAL_VAL = setInterval(() => this.Type(), 100);
      }, 200);
    }
  }
}

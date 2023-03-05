import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { HeaderAnimation } from '../../../utils/animations/header-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [HeaderAnimation],
})
export class HeaderComponent {
  show = false;
  currentPosition: number = 0;

  constructor(private scroller: ViewportScroller) { }

  goToId(id: string) {
    this.scroller.scrollToAnchor(id);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition || this.currentPosition == 0) {
      this.show = true;
    } else {
      this.show = false;
    }
    this.currentPosition = scroll;
  }
}

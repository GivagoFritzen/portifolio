import { Component, HostListener } from '@angular/core';
import { HeaderAnimation } from '../../utils/animations/header-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [HeaderAnimation],
})
export class HeaderComponent {
  show = true;
  currentPosition: number = 0;

  @HostListener('window:scroll')
  onWindowScroll() {
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition) {
      this.show = true;
    } else {
      this.show = false;
    }
    this.currentPosition = scroll;
  }
}

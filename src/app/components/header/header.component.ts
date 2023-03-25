import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderAnimation } from '../../../utils/animations/header-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [HeaderAnimation],
})
export class HeaderComponent {
  show: boolean = false;
  isHome: boolean = false;

  currentPosition: number = 0;

  constructor(private scroller: ViewportScroller, private translateService: TranslateService, private router: Router) {
    this.isHome = window.location.pathname !== '/';

    translateService.setDefaultLang('en-US');
  }

  goToId(id: string): void {
    this.scroller.scrollToAnchor(id);
  }

  goHome(): void {
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition || this.currentPosition == 0) {
      this.show = true;
    } else {
      this.show = false;
    }
    this.currentPosition = scroll;
  }

  switchLanguage(lang: any): void {
    this.translateService.use(lang.target.value);
  }
}

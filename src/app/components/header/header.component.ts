import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderAnimation } from '../../../utils/animations/header-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [HeaderAnimation],
})
export class HeaderComponent implements OnInit {
  show: boolean = true;
  isHome: boolean = false;

  private currentPosition: number = 0;
  private CHECKBOX?: HTMLInputElement | null;

  constructor(private scroller: ViewportScroller, private translateService: TranslateService, private router: Router) {
    this.isHome = window.location.pathname === '/';

    translateService.setDefaultLang('en-US');
  }

  ngOnInit(): void {
    this.CHECKBOX = document.querySelector("#hamburger-menu-toggle");

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.urlAfterRedirects == '/';
      }
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition || this.currentPosition == 0) {
      this.show = false;
    } else {
      this.show = true;
    }

    this.CHECKBOX!.checked = false;
    this.currentPosition = scroll;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (this.CHECKBOX!.checked && window.innerWidth >= 700) {
      this.CHECKBOX!.checked = false;
    }
  }

  goToId(id: string): void {
    this.scroller.scrollToAnchor(id);
    this.CHECKBOX!.checked = false;
  }

  goHome(): void {
    this.router.navigateByUrl('');
  }

  switchLanguage(lang: any): void {
    this.translateService.use(lang.target.value);
  }
}

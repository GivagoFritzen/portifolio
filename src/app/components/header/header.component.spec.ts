import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let translateServiceMock: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        BrowserAnimationsModule,
        TranslateTestingModule
          .withTranslations('pt-BR', require('../../../assets/i18n/pt-BR.json'))
          .withTranslations('en-US', require('../../../assets/i18n/en-US.json')),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    translateServiceMock = TestBed.inject(TranslateService);
    translateServiceMock.use('pt-BR');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll with currentPosition equal 0', () => {
    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);

    expect(component.show).toBeFalse();
    expect(component['currentPosition']).toBe(window.pageYOffset);
    expect(component['CHECKBOX']!.checked).toBeFalse();
  });

  it('should scroll with scroll > this.currentPosition', () => {
    window.pageYOffset = 10;
    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);

    expect(component.show).toBeFalse();
    expect(component['currentPosition']).toBe(window.pageYOffset);
    expect(component['CHECKBOX']!.checked).toBeFalse();
  });

  it('should scroll and show be equal true', () => {
    window.pageYOffset = 10;
    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);
    window.dispatchEvent(scrollEvent);

    expect(component.show).toBeTrue();
    expect(component['currentPosition']).toBe(window.pageYOffset);
    expect(component['CHECKBOX']!.checked).toBeFalse();
  });

  it('should resize and set CHECKBOX!.checked = false', () => {
    component['CHECKBOX']!.checked = true;

    const resizeEvent = new Event('resize');
    window.dispatchEvent(resizeEvent);

    expect(component['CHECKBOX']!.checked).toBeFalse();
  });

  it('should resize and window.innerWidth < 700', () => {
    window.innerWidth = 600;
    component['CHECKBOX']!.checked = true;

    const resizeEvent = new Event('resize');
    window.dispatchEvent(resizeEvent);

    expect(component['CHECKBOX']!.checked).toBeTrue();
  });

  it('should go to id', () => {
    const viewportScrollerMock = TestBed.inject(ViewportScroller);
    const scrollToAnchorSpy = spyOn(viewportScrollerMock, 'scrollToAnchor');

    const id = 'db70d1fa-83ca-449c-95f3-cbe50f6cb120';
    component.goToId(id);

    expect(scrollToAnchorSpy).toHaveBeenCalledWith(id);
    expect(component['CHECKBOX']!.checked).toBeFalse();
  });

  it('should go home', () => {
    const routerMock = TestBed.inject(Router);
    const navigateSpy = spyOn(routerMock, 'navigateByUrl');
    component.goHome();

    expect(navigateSpy).toHaveBeenCalledWith('');
  });

  it('should change language', () => {
    const otherLanguage = 'en-US';

    component.switchLanguage({
      target: {
        value: otherLanguage
      }
    });

    expect(translateServiceMock.currentLang).toBe(otherLanguage);
  });
});

describe('HeaderComponent ngOnInit router NavigationEnd', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  class MockRouter {
    public events = of(new NavigationEnd(1, '/path', '/previous-path'));
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        BrowserAnimationsModule,
        TranslateTestingModule
          .withTranslations('pt-BR', require('../../../assets/i18n/pt-BR.json'))
          .withTranslations('en-US', require('../../../assets/i18n/en-US.json')),
      ],
      providers: [{ provide: Router, useClass: MockRouter }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should handle NavigationEnd event in ngOnInit and set isHome False', () => {
    expect(component.isHome).toBeFalse();
  });
});

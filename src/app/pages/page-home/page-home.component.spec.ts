import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeComponent } from './page-home.component';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/utils/test/translate-loader-test';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { WhoComponent } from 'src/app/components/who/who.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { GamesComponent } from 'src/app/components/games/games.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ModalGameComponent } from 'src/app/components/modal/modal-game.component';
import { NguCarouselModule } from '@ngu/carousel';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ModalGameComponent,
        WhoComponent,
        SkillsComponent,
        GamesComponent,
        FooterComponent,
        PageHomeComponent
      ],
      imports: [
        CommonModule,
        NguCarouselModule,
        BrowserAnimationsModule,
        TranslateModule.forChild(
          {
            loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
            }
          },
        )],
      providers: [
        HttpHandler,
        HttpClient,
        TranslateStore,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

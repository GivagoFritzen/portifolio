import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { ModalGameComponent } from '../modal/modal-game.component';
import { createTranslateLoader } from 'src/utils/test/translate-loader-test';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NguCarouselModule } from '@ngu/carousel';
import { CommonModule } from '@angular/common';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ModalGameComponent,
        GamesComponent
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

    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoComponent } from './who.component';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/utils/test/translate-loader-test';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('WhoComponent', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoComponent],
      imports: [
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

    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

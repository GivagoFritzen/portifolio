import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceGameComponent } from './space-game.component';

describe('SpaceGameComponent', () => {
  let component: SpaceGameComponent;
  let fixture: ComponentFixture<SpaceGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

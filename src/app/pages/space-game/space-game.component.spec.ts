import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceGameComponent } from './space-game.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { map, player } from './configs';

fdescribe('SpaceGameComponent', () => {
  let component: SpaceGameComponent;
  let fixture: ComponentFixture<SpaceGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ModalComponent,
        SpaceGameComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaceGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should moveLeft inside game limit', () => {
    player.x = window.innerWidth / 2;
    const lastPosition = player.x;
    component.moveLeft();
    expect(player.x).toBe(lastPosition - player.speed);
  });

  it('should moveLeft outside game limit', () => {
    player.x = window.innerWidth / 2;
    player.x = -10;
    component.moveLeft();
    expect(player.x).toBe(0);
  });

  it('should moveRight outside game limit', () => {
    player.x = window.innerWidth / 2;
    player.x = 10000000;
    component.moveRight();
    expect(player.x).toBe(map.width - player.width);
  });

  it('should moveRight inside game limit', () => {
    player.x = window.innerWidth / 2;
    const lastPosition = player.x;
    component.moveRight();
    expect(player.x).toBe(lastPosition + player.speed);
  });

  it('should moveUp outside game limit', () => {
    player.y = window.innerHeight / 2;
    player.y = component['headerSize'] - 1;
    component.moveUp();
    expect(player.y).toBe(component['headerSize']);
  });

  it('should moveUp inside game limit', () => {
    player.y = window.innerHeight / 2;
    const lastPosition = player.y;
    component.moveUp();
    expect(player.y).toBe(lastPosition - player.speed);
  });

  it('should moveDown outside game limit', () => {
    player.y = map.height;
    component.moveDown();
    expect(player.y).toBe(map.height - player.height);
  });

  it('should moveDown outside game limit', () => {
    player.y = window.innerHeight / 2;
    const lastPosition = player.y;
    component.moveDown();
    expect(player.y).toBe(lastPosition + player.speed);
  });
});

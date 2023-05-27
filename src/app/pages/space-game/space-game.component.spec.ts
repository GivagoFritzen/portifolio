import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceGameComponent } from './space-game.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { map, player } from './configs';

describe('SpaceGameComponent', () => {
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

  it('should reset game', () => {
    player.x = 10;
    player.y = 10;

    component.resetGame();

    expect(component["obstacles"]).toEqual([]);
    expect(player.x).toBe(window.innerWidth / 2);
    expect(player.y).toBe(window.innerHeight / 2);
    expect(component.showGameOver).toBeFalse();
  });

  const keydownMovePlayerLeft: { key: string }[] = [
    { key: 'ArrowLeft' },
    { key: 'A' },
    { key: 'a' }
  ];
  keydownMovePlayerLeft.forEach((keydownEventCase) => {
    it(`should handle keydown event for key '${keydownEventCase.key}' and move left`, () => {
      player.x = window.innerWidth / 2;
      const lastPosition = player.x;
      const keyboardEvent = new KeyboardEvent('keydown', { key: keydownEventCase.key });

      document.dispatchEvent(keyboardEvent);
      expect(player.x).toBe(lastPosition - player.speed);
    });
  });

  const keydownMovePlayerRight: { key: string }[] = [
    { key: 'ArrowRight' },
    { key: 'D' },
    { key: 'd' }
  ];
  keydownMovePlayerRight.forEach((keydownEventCase) => {
    it(`should handle keydown event for key '${keydownEventCase.key}' and move right`, () => {
      player.x = window.innerWidth / 2;
      const lastPosition = player.x;
      const keyboardEvent = new KeyboardEvent('keydown', { key: keydownEventCase.key });

      document.dispatchEvent(keyboardEvent);
      expect(player.x).toBe(lastPosition + player.speed);
    });
  });

  const keydownMovePlayerUp: { key: string }[] = [
    { key: 'ArrowUp' },
    { key: 'W' },
    { key: 'w' }
  ];
  keydownMovePlayerUp.forEach((keydownEventCase) => {
    it(`should handle keydown event for key '${keydownEventCase.key}' and move up`, () => {
      player.y = window.innerHeight / 2;
      const lastPosition = player.y;
      const keyboardEvent = new KeyboardEvent('keydown', { key: keydownEventCase.key });

      document.dispatchEvent(keyboardEvent);
      expect(player.y).toBe(lastPosition - player.speed);
    });
  });

  const keydownMovePlayerDown: { key: string }[] = [
    { key: 'ArrowDown' },
    { key: 'S' },
    { key: 's' }
  ];
  keydownMovePlayerDown.forEach((keydownEventCase) => {
    it(`should handle keydown event for key '${keydownEventCase.key}' and move up`, () => {
      player.y = window.innerHeight / 2;
      const lastPosition = player.y;
      const keyboardEvent = new KeyboardEvent('keydown', { key: keydownEventCase.key });

      document.dispatchEvent(keyboardEvent);
      expect(player.y).toBe(lastPosition + player.speed);
    });
  });
});

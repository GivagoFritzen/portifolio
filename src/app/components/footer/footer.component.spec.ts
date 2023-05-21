import { ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { FooterComponent } from './footer.component';
import { Joystick } from 'src/enum/joystick.enum';
import { Router } from '@angular/router';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let routerMock: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    routerMock = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should press buttons several times but code.lenght never exceed 11', () => {
    for (let index = 0; index < 15; index++) {
      component.joystickClick(Joystick.A);
    }

    expect(component['code'].length).toBe(11);
  });

  it('should active konamiCode', () => {
    const navigateSpy = spyOn(routerMock, 'navigateByUrl');
    const konamiCode = [
      Joystick.Up, Joystick.Up, Joystick.Down, Joystick.Down, Joystick.Left,
      Joystick.Right, Joystick.Left, Joystick.Right, Joystick.B, Joystick.A, Joystick.Start
    ];

    for (let index = 0; index < konamiCode.length; index++) {
      component.joystickClick(konamiCode[index]);
    }

    expect(component['code'].length).toBe(11);
    expect(localStorage.getItem("Secret")).toBe("KONAMI CODE");
    expect(navigateSpy).toHaveBeenCalledWith('/secret');
  });
});

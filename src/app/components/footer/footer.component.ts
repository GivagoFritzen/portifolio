import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Joystick } from '../../../enum/joystick.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentButton = Joystick;

  code: Joystick[] = [];
  konamiCode: Joystick[] = [
    Joystick.Up, Joystick.Up, Joystick.Down, Joystick.Down, Joystick.Left,
    Joystick.Right, Joystick.Left, Joystick.Right, Joystick.B, Joystick.A, Joystick.Start
  ];

  constructor(private router: Router) { }

  joystickClick(button: Joystick): void {
    this.code.push(button);

    if (this.code.length > 11) {
      this.code.shift();
    }

    if (JSON.stringify(this.code) === JSON.stringify(this.konamiCode)) {
      localStorage.setItem("Secret", "KONAMI CODE");
      this.router.navigateByUrl('/secret');
    }
  }
}

import { Component } from '@angular/core';
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
    Joystick.Right, Joystick.Left, Joystick.Right, Joystick.A, Joystick.B, Joystick.Start
  ];

  joystickClick(button: Joystick) {
    this.code.push(button);

    if (this.code.length > 11) {
      this.code.shift();
    }

    if (JSON.stringify(this.code) === JSON.stringify(this.konamiCode)) {
      console.log('KONAMI CODE');
    }
  }
}

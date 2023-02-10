import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  slides: any[] = new Array(1).fill(
    { title: '', porcent: 50 }
  );
}

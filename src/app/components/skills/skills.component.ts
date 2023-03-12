import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/models/skill.model';
import { SlideInOutAnimation } from 'src/utils/animations/slide-animation';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [SlideInOutAnimation]
})
export class SkillsComponent implements OnInit {
  hidden = 'out';
  skills: SkillModel[] = [
    { title: 'CSS', percentage: '20%' },
    { title: 'CSharp', percentage: '90%' }
  ];

  othersSkills: SkillModel[] = [
    { title: 'skills.bad-jokes', percentage: '11%' }
  ];

  ngOnInit() {
    this.appendCss();
  }

  appendCss() {
    const style = document.createElement('style');

    this.addKeyFrameSkill(style, this.skills);
    this.addKeyFrameSkill(style, this.othersSkills);
  }

  addKeyFrameSkill(style: HTMLStyleElement, skills: SkillModel[]) {
    skills.forEach(skill => {
      style.innerHTML += `@keyframes ${skill.title} {
        0% {
            width: 0%;
        }
    
        100% {
            width: ${skill.percentage}
        }
    }`

      document.head.appendChild(style);
    });
  }

  hiddenOthersSkills() {
    this.hidden = this.hidden === 'out' ? 'in' : 'out';
  }
}

import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/models/skill.model';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  hidden: boolean = true;
  skills: SkillModel[] = [
    { title: 'CSS', percentage: '20%' },
    { title: 'CSharp', percentage: '90%' }
  ];

  othersSkills: SkillModel[] = [
    { title: 'CSSw', percentage: '11%' },
    { title: 'CSharp2', percentage: '45%' }
  ];


  ngOnInit() {
    this.appendCss();
  }

  appendCss() {
    var style = document.createElement('style');

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
    this.hidden = !this.hidden;


    if (!this.hidden) {
      this.skills = this.skills.concat(
        this.othersSkills
      );

      return;
    }

    this.skills = this.skills.filter((el) => {
      return this.othersSkills.indexOf(el) < 0;
    });
  }
}

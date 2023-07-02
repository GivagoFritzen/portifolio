import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/models/skill.model';
import { SlideInOutAnimation } from 'src/utils/animations/slide-animation';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [SlideInOutAnimation]
})
export class SkillsComponent implements OnInit, AfterViewInit {
  hidden = 'out';
  skills: SkillModel[] = [
    { title: 'CSS', percentage: '80%' },
    { title: 'React', percentage: '60%' },
    { title: 'Angular', percentage: '65%' },
    { title: 'CSharp', percentage: '75%' },
    { title: 'SQL', percentage: '70%' },
    { title: 'Mongo', percentage: '70%' }
  ];

  othersSkills: SkillModel[] = [
    { title: 'skills.bad-jokes', percentage: '100%' }
  ];

  ngOnInit(): void {
    this.appendCss();
  }

  ngAfterViewInit(): void {
    this.scrollRevealEffect('#section-skills h1');
    this.scrollRevealEffect('.skills');
  }

  hiddenOthersSkills(): void {
    this.hidden = this.hidden === 'out' ? 'in' : 'out';
  }

  private scrollRevealEffect(name: string): void {
    ScrollReveal().reveal(name, {
      distance: '50px',
      duration: 2000,
      origin: 'bottom',
      reset: false
    });
  }

  private appendCss(): void {
    const style = document.createElement('style');

    this.addKeyFrameSkill(style, this.skills);
    this.addKeyFrameSkill(style, this.othersSkills);
  }

  private addKeyFrameSkill(style: HTMLStyleElement, skills: SkillModel[]): void {
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
}

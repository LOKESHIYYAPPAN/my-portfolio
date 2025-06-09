import { Component } from '@angular/core';
import { SkillCardComponent } from "../skill-card/skill-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  frontendSkills = [
    { name: 'Angular', icon: 'assets/icons/icons8-angular-480.png' },
    { name: 'React.js', icon: 'assets/icons/icons8-react-js-480.png' },
    { name: 'HTML5', icon: 'assets/icons/icons8-html-480.png' },
    { name: 'CSS3', icon: 'assets/icons/icons8-css-144.png' },
    { name: 'JavaScript', icon: 'assets/icons/icons8-javascript-480.png' },
    { name: 'TypeScript', icon: 'assets/icons/icons8-typescript-500.png' },
    { name: 'Bootstrap', icon: 'assets/icons/icons8-bootstrap-480.png' },
  ];

  backendSkills = [
    { name: 'Node.js', icon: 'assets/icons/icons8-node-js-240.png' },
    { name: 'Express.js', icon: 'assets/icons/icons8-express-js-500.png' },
  ];

  databaseSkills = [
    { name: 'MongoDB', icon: 'assets/icons/icons8-mongo-db-96.png' },
  ];

  toolSkills = [
    { name: 'Git', icon: 'assets/icons/icons8-git-480.png' },
    { name: 'GitHub', icon: 'assets/icons/icons8-github-500.png' },
    { name: 'Postman', icon: 'assets/icons/icons8-postman-inc-96.png' },
    { name: 'VS Code', icon: 'assets/icons/icons8-vs-code-144.png' },
  ];

  softSkills = [
    { name: 'Problem-solving', icon: 'assets/icons/icons8-problem-solving-100.png' },
    { name: 'Teamwork', icon: 'assets/icons/icons8-teamwork-96.png' },
    { name: 'Adaptability', icon: 'assets/icons/icons8-employee-turnover-78.png' },
    { name: 'Communication', icon: 'assets/icons/icons8-communication-96.png' },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon?: string;
  faIcon?: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  frontendSkills: Skill[] = [
    { name: 'Angular', icon: 'assets/icons/icons8-angular-480.png' },
    { name: 'React.js', icon: 'assets/icons/icons8-react-js-480.png' },
    { name: 'TypeScript', icon: 'assets/icons/icons8-typescript-500.png' },
    { name: 'JavaScript', icon: 'assets/icons/icons8-javascript-480.png' },
    { name: 'HTML5', icon: 'assets/icons/icons8-html-480.png' },
    { name: 'CSS3', icon: 'assets/icons/icons8-css-144.png' },
    { name: 'Bootstrap', icon: 'assets/icons/icons8-bootstrap-480.png' },
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', icon: 'assets/icons/icons8-node-js-240.png' },
    { name: 'Express.js', icon: 'assets/icons/icons8-express-js-500.png' },
    { name: 'REST API', faIcon: 'fa-solid fa-cloud-arrow-down' },
    { name: 'JWT', faIcon: 'fa-solid fa-key' },
    { name: 'Mongoose', faIcon: 'fa-solid fa-database' },
  ];

  databaseSkills: Skill[] = [
    { name: 'MongoDB', icon: 'assets/icons/icons8-mongo-db-96.png' },
  ];

  cloudSkills: Skill[] = [
    { name: 'AWS (S3, Lambda, CloudFront)', faIcon: 'fa-brands fa-aws' },
    { name: 'GCP', faIcon: 'fa-brands fa-google' },
  ];

  aiSkills: Skill[] = [
    { name: 'Python', faIcon: 'fa-brands fa-python' },
    { name: 'LLM (OpenAI/LangChain)', faIcon: 'fa-solid fa-brain' },
    { name: 'Data Processing', faIcon: 'fa-solid fa-chart-line' },
  ];

  toolSkills: Skill[] = [
    { name: 'Git', icon: 'assets/icons/icons8-git-480.png' },
    { name: 'GitHub', icon: 'assets/icons/icons8-github-500.png' },
    { name: 'Postman', icon: 'assets/icons/icons8-postman-inc-96.png' },
    { name: 'VS Code', icon: 'assets/icons/icons8-vs-code-144.png' },
    { name: 'Linux', faIcon: 'fa-brands fa-linux' },
    { name: 'Flutter', faIcon: 'fa-solid fa-mobile-screen-button' },
  ];
}

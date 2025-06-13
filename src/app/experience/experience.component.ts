import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences = [
    {
      title: 'Associate Full Stack Developer',
      company: 'BomWhiz Technologies',
      duration: 'Feb 2025 - Present',
      location: 'Chidambaram, India',
      responsibilities: [
        'Promoted to Full Stack Developer after successful internship and backend skill acquisition.',
        'Independently developed and maintained frontend in Angular and backend services in Node.js/Express.js.',
        'Implemented REST APIs and integrated with MongoDB for application features.',
        'Participated in architectural planning, code reviews, and Agile development ceremonies.'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'BomWhiz Technologies',
      duration: 'Sep 2024 - Feb 2025',
      location: 'Chidambaram, India',
      responsibilities: [
        'Developed responsive and dynamic user interfaces using Angular and Bootstrap.',
        'Improved frontend performance and implemented reusable components.',
        'Gradually trained in backend development with Node.js, Express.js, and MongoDB.',
        'Collaborated closely with senior developers to understand full stack workflows and project structure.'
      ]
    }
  ];
}

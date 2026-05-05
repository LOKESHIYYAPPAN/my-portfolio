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
      company: 'BornWhiz Technologies',
      duration: '09/2024 - 05/2026',
      location: 'Chidambaram, India',
      responsibilities: [
        'Led a team of 4 developers, coordinating tasks, reviewing code, and ensuring timely delivery of features.',
        'Designed and developed a full-stack educational web platform using Angular, Node.js, and MongoDB.',
        'Built responsive frontend UI and developed backend REST APIs, integrating both layers seamlessly.',
        'Optimized application performance by resolving Angular RxJS memory leaks, improving stability and user experience.',
        'Increased team productivity from ~200 to 400–500 tasks/day (2x) through effective leadership and optimization.'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'BornWhiz Technologies',
      duration: '09/2024 - 02/2025',
      location: 'Chidambaram, India',
      responsibilities: [
        'Built dynamic and responsive Angular user interfaces for an educational web platform.',
        'Built reusable Angular components and responsive layouts with CSS and Bootstrap.',
        'Integrated frontend with backend APIs and handled API responses efficiently.',
        'Participated in debugging and resolving issues in both development and production environments.'
      ]
    }
  ];
}

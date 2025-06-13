import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = [
    {
      degree: 'B.Sc. Computer Science',
      duration: '2021 – 2024',
      institution: 'Shree Raghavendra Arts and Science College, Keezhamoongiladi',
      percentage: '73.2%'
    },
    {
      degree: '12th Standard',
      duration: '2020 – 2021',
      institution: 'Sri Ramakrishna Vidyashala Higher Secondary School, Chidambaram',
      percentage: '81%'
    },
    {
      degree: '11th Standard',
      duration: '2019 – 2020',
      institution: 'Sri Ramakrishna Vidyashala Higher Secondary School, Chidambaram',
      percentage: '57%'
    },
    {
      degree: '10th Standard',
      duration: '2018 – 2019',
      institution: 'Government Higher Secondary School, T S Pettai',
      percentage: '78.6%'
    }
  ];
}

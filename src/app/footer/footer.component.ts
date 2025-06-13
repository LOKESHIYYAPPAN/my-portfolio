import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lokesh-iyyappan-062931296/',
      icon: 'linkedin'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tech_lover_001/',
      icon: 'instagram'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/8667367720',
      icon: 'whatsapp'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/LOKESHIYYAPPAN',
      icon: 'github'
    }
  ];

  getYear() {
    return new Date().getFullYear();
  }
}

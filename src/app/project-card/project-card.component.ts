import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tech: string[] = [];
  @Input() liveLink: string | null = null;
  @Input() codeLink: string = '';
  @Input() cardIndex: number = 0;

  constructor(private colorService: ColorService) { }

  getColors(word: string) {
    return this.colorService.getTextBgColor(word.trim()[0]);
  }
}

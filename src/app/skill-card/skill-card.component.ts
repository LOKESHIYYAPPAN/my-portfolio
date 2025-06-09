import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
}

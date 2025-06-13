import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [MatIcon, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  menuShown: boolean = false;


  toggleMenu() {
    this.menuShown = !this.menuShown;
  }

  closeMenuOnNavigate() {
    if (this.menuShown) {
      this.menuShown = false;
    }
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, MatIcon, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  menuShown: boolean = false;


  toggleMenu() {
    this.menuShown = !this.menuShown;
  }
}

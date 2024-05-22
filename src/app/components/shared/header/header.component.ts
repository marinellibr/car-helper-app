import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { QuickUpdateComponent } from '../quick-update/quick-update.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent, QuickUpdateComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  menuWatcher = false;

  toggleMenu() {
    this.menuWatcher = !this.menuWatcher;
  }

  navigate(endpoint: string) {
    this.router.navigateByUrl(`/${endpoint}`);
  }
}

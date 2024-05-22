import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';

import renegade from '../assets/mocks/renegade.json';
import porsche from '../assets/mocks/911.json';
import rs6 from '../assets/mocks/rs6.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'car-helper-app';

  ngOnInit(): void {
    window.localStorage.setItem('selectedVehicle', JSON.stringify(renegade));
    window.localStorage.setItem('allVehicles', this.compileVehicles());
  }

  compileVehicles(): string {
    const vehicles = [renegade, porsche, rs6];
    return JSON.stringify(vehicles);
  }
}

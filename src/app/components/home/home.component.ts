import { Component, OnInit } from '@angular/core';
import { CarInfoComponent } from '../shared/car-info/car-info.component';
import { MetricCardComponent } from '../shared/metric-card/metric-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarInfoComponent, MetricCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  metrics: any[] = [];

  ngOnInit(): void {
    this.metrics = JSON.parse(
      window.localStorage.getItem('selectedVehicle')!
    ).metrics;

    this.metrics = this.metrics.filter((value) => value.liked);
  }
}

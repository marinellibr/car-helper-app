import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss',
})
export class MetricCardComponent {
  @Input() metric: any;
  percentage = 0;

  ngOnInit(): void {
    this.percentage =
      (this.metric.currentMileage / this.metric.maxMileage) * 100;
  }
}

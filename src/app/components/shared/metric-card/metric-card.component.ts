import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss',
})
export class MetricCardComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() metric: any;
  percentage = 0;

  ngOnInit(): void {
    this.percentage =
      (this.metric.currentMileage / this.metric.maxMileage) * 100;
  }

  maintenance(id: string) {
    console.log(`maintenance/${id}`);
    // this.router.navigateByUrl(`maintenance/${id}`);
  }
}

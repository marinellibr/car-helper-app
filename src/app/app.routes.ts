import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { MileageFormComponent } from './components/forms/mileage-form/mileage-form.component';
import { MaintenanceFormComponent } from './components/forms/maintenance-form/maintenance-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'update-mileage', component: MileageFormComponent },
  { path: 'maintenance/:id', component: MaintenanceFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

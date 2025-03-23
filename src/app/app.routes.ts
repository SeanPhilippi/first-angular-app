import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResetCounterComponent } from './reset-counter/reset-counter.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'reset',
    component: ResetCounterComponent,
  },
];

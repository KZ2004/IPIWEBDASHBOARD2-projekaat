import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// Putanja mora biti do foldera pa do fajla bez .ts
import { Dashboard } from './dashboard/dashboard'; 

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: '' }
];
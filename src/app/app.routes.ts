import { Routes } from '@angular/router';
import { DashboardComponent } from './auth/components/dashboard/dashboard.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HumanBodyComponent } from './human-body/human-body.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // default route
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'human', component: HumanBodyComponent },
    { path: '**', redirectTo: 'login' } // fallback for unknown routes
];

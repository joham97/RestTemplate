import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../routing/route-guard.service';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'login',
        component: LoginComponent
      }
  ];
  
  export const AppRouting = RouterModule.forRoot(appRoutes, { 
    useHash: true
  });
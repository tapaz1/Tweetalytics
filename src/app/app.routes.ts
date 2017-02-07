import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/views/login/login.component';
import { NotFoundComponent } from '../app/views/not-found/not-found.component';
import { HomeComponent } from '../app/views/home/home.component';
import { DashboardComponent } from '../app/views/dashboard/dashboard.component';
import { SearchComponent } from '../app/views/search/search.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

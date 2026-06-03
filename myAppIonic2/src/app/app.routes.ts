import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
  { path: 'widgets', loadComponent: () => import('./ui/ui.page').then(m => m.UIPage) },
  { path: 'calculatrice', loadComponent: () => import('./calculatrice/calculatrice.page').then(m => m.CalculatricePage) },
  {
    path: 'weather',
    loadComponent: () => import('./weather/weather.page').then( m => m.WeatherPage)
  },
  {
    path: 'camera',
    loadComponent: () => import('./camera/camera.page').then( m => m.CameraPage)
  },
];
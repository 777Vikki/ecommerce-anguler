import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('./../../pages/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),
  },
  {
    path: 'shop',
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('./../../pages//shop/shop.module').then(
        (mod) => mod.ShopModule
      ),
  },
];

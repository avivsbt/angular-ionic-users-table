import { Routes } from '@angular/router';

export const HomeRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import("./pages/home/home.page").then((p) => p.HomePage),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import("./pages/edit-item/edit-item.page").then((p) => p.EditItemPage),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
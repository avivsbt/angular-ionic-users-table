import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import("./pages/login/login.page").then((p) => p.LoginPage),
    outlet: "auth"
  },
];
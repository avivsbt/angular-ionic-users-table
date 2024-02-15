import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.routes').then(r => r.HomeRoutes),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.routes').then((r) => r.AuthRoutes),
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

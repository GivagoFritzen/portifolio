import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/page-home/page-home.module').then(m => m.PageHomeModule),
  },
  {
    path: 'secret',
    pathMatch: 'full',
    loadChildren: () => import('./pages/space-game/space-game.module').then(m => m.SpaceGameModule),
  },
  {
    path: '404',
    pathMatch: 'full',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  },
  {
    path: '**', redirectTo: '/404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

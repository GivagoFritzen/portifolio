import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceGameComponent } from './game/space-game/space-game.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageHomeComponent,
    children: []
  },
  {
    path: 'secret',
    pathMatch: 'full',
    component: SpaceGameComponent,
    children: []
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    pathMatch: 'full'
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

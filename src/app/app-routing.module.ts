import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path: 'micro-ng',
    component: EmptyRouteComponent,
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

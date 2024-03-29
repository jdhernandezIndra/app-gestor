import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { PaginasComponent } from './paginas.component';

const routes: Routes = [

  {
    path: '',
    component: PaginasComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./child-pages-routing.module').then( m => m.ChildPagesRoutesModule )
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

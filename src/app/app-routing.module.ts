import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoRoutingModule } from './ingreso/ingreso-routing.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: '**', component: NopageFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    IngresoRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

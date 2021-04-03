import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rc1Component } from './rc1/rc1.component';
import { Rc2Component } from './rc2/rc2.component';

const routes: Routes = [
  {path:'', component:Rc1Component},
  {path:'rc2', component:Rc2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

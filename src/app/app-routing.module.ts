import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './modules/dashboard/dashboard.componet';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: DashboardComponent,
}
,{
     path: 'students',
     loadChildren: () => import("./modules/students/students.module").then(m => m.StudentsModule)
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    //LayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

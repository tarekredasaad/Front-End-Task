import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  {path:"report",loadChildren:()=>import("./report/report.module").then(r=>r.ReportModule)},
  {path:"first",loadChildren:()=>import("./first-module/first-module.module").then(f=>f.FirstModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

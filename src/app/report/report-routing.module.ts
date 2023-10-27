import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportModule } from './report.module';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'report', component: ReportComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class ReportRoutingModule { }

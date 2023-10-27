import { Component, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnDestroy {
subscription: any;
constructor(private dataService:DataService){
 this.report= this.dataService.getData()
 this.subscription = this.dataService.getData().subscribe((data) => {
   this.report = data
  });
  console.log(this.report)
 
}
report:any

ngOnDestroy(): void {
    this.subscription.unsubscribe()
}

}

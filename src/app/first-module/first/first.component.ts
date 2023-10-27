import { Component, Renderer2, Inject, LOCALE_ID, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/Services/data.service';
import { SupplierData } from 'src/app/interfaces/supplierData';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent    {
  licenseImg!: string;
  imageUrl: string | ArrayBuffer | null = null;
  fs: any;
  url!:string
  check:any
  reserved:any
  checkType:any
  constant!:any
  mintues:number = 20;
  supplierData:SupplierData={
    name:"",
    SupplierNumber:0,
    ReservationNumber:0,
    ReservationType:"",
    Reservationtime:0
  }
  constructor(private Route:Router,private DataService:DataService,private translate: TranslateService,private renderer: Renderer2, @Inject(LOCALE_ID) private locale: string){
    translate.setDefaultLang('en');
    const isRtl = "arb"; // Add more languages as needed

    
  }
  
  
  switchLanguage(language: string) {
    if (language == "ar") {
      this.renderer.addClass(document.getElementById("firstPage"), 'rtl-container');
      this.renderer.removeClass(document.getElementById("firstPage"), 'ltr-container');
    } else {
      this.renderer.removeClass(document.getElementById("firstPage"), 'rtl-container');
      this.renderer.addClass(document.getElementById("firstPage"), 'ltr-container');
    }
    this.translate.use(language);
  }

  
  
  plus(){
    this.mintues++;
  }
  minus(){
    this.mintues--;
  }

  sendData(){
    if(!this.check){
      this.supplierData.Reservationtime = 30
    }
    if(!this.reserved){
      this.supplierData.ReservationNumber = 1
    }
    if(this.checkType){
      this.supplierData.ReservationType ='Reservation during the day'
    }else{
      this.supplierData.ReservationType ='More than one day'

    }
    console.log(this.supplierData);
    this.DataService.setData(this.supplierData);
    
    this.Route.navigate(["report/report"]);
  }
  onLicenseImgChange(event: any) {
    const file = event.target.files[0];
    console.log(file)
    console.log(file.name)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event:any) => {
      this.url = event.target.result;
    };
    console.log(this.url)
  }

}

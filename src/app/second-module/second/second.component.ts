import { Component,DoCheck, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TimeWork } from 'src/app/interfaces/TimesWork';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements DoCheck {
  constructor(private fb:FormBuilder,private renderer: Renderer2,public element: ElementRef) {
    const isRtl = "arb"; // Add more languages as needed
    const main = document.getElementById('main')
    // Apply LTR or RTL styles based on the language
    if (isRtl == "arb") {
      main?.classList.add('rtl-container');
    } else {
      main?.classList.add('ltr-container');
    }

    
    
   }
   isChecked:any
   TimeOfWork:TimeWork[]=[]
   dataform=this.fb.group({
    day:"",
    froms:this.fb.array([]),
    tos:this.fb.array([]),
   })
   get day(){
    return this.dataform.get('day')
   }
  get froms()
  {
  return this.dataform.get('froms') as FormArray;
  }
  get tos()
  {
    return this.dataform.get('tos') as FormArray;
  }
  addForm()
  {
    this.froms.push(this.fb.control(''));
  }
  addTo()
  {
    this.tos.push(this.fb.control(''));
  }
  // timeForm: FormGroup;

  
  // getDayControls() {
  //   return (this.timeForm.get('Days') as FormArray).controls;
  // }
  
  // getTimeControls(day: AbstractControl) {
  //   return (day.get('times') as FormArray).controls;
  // }
  // initDay() {
  //   return this.fb.group({
  //     times: this.fb.array([this.initTime()])
  //   });
  // }

  // initTime() {
  //   return this.fb.control('');
  // }

  // addTime(day: AbstractControl) {
  //   const times = day.get('times') as FormArray;
  //   times.push(this.initTime());
  // }
  submitData(){
    // console.log(this.timeForm);
    console.log(this.TimeOfWork);
    console.log(this.dataform);
    
  }
  ngDoCheck(): void {
  }
  controlDay(i:any){
    
    if(this.days[i].checked){
      this.days[i].checked= false
    }else{
      this.days[i].checked = true
      
    }
    console.log(this.days[i]);
  }
  public date = new Date();
  timeEnd:any
  days:any[]=[
    { checked: false, content: 'السبت' },
    { checked: false, content: 'الأحد' },
    { checked: false, content: 'الإثنين' },
    { checked: false, content: 'الثلاثاء' },
    { checked: false, content: 'الأربعاء' },
    { checked: false, content: 'الخميس' },
    { checked: false, content: 'الجمعة' }
    ]
  showTimeList(){
    var timeList = document.getElementById("showTimeList");
    timeList?.classList.remove('d-none')
    timeList?.classList.add('d-block')
  }
  add(i:any){
    
    this.froms.push(this.fb.control(''));
    this.tos.push(this.fb.control(''));
    console.log(this.dataform);
    var containerOfDay = document.getElementById(i);
    if(containerOfDay){
        var containerTimePicker = document.getElementById('containerTimePicker'+i);
        if(containerTimePicker){
    
          const newContainerTimePicker =containerTimePicker.cloneNode(true); 
         
          containerOfDay.appendChild(newContainerTimePicker);
        }
      //  newContainerTimePicker?.;

    }
  }
}

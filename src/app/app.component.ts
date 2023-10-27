import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myTask';
  selectedTime: Date = new Date();
  timeForm: FormGroup;
  // timeForm: FormGroup;
  selectedTimeControl: FormControl;

  constructor(private Router:Router) {
    this.selectedTimeControl = new FormControl(); // Create a FormControl for selectedTime
    this.timeForm = new FormGroup({
      selectedTime: this.selectedTimeControl // Use the FormControl
    });
    this.Router.navigate(['first/first']);
  }
}

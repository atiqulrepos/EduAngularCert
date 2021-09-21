import { Component, Input, OnInit } from '@angular/core';

@Component({
  //selector: 'app-employee',
  selector: '[app-employee]',
  //selector: '.app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empid:number = this.getRandomId();
  firstName:string = "Vivek";
  lastName:string = "Dahiya";
  dept:string = "Accounting";
  city:string = "Bangalore";
  email:string = "vivek.dahiya@email.com";
  salary:number = 650000.00;

  isAdminUser:boolean = true;

  constructor() {

  }

  getRandomId():number {
    return Math.floor(Math.random() * 100000);
  }

  ngOnInit(): void {
    setTimeout(
      () => this.isAdminUser = false,
      5000
    );
  }

}

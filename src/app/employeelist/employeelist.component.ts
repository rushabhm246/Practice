import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees!:Employee[]

  constructor(private empService:EmployeeService,
    private dialog:MatDialog) { }

  ngOnInit(): void {

    this.getEmployees()
    this.empService.employee.subscribe({
      next:(data:any)=>{
        this.getEmployees()
      }

    })
  }

  getEmployees(){
    this.empService.getAllEmployees().subscribe({
      next:(data:any)=>{
        this.employees = data
      }
    })
  }

  editEmployee(data:any){
    this.dialog.open(AddEditComponent,{
      data:data
    })
  }

}

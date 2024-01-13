import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  employees!:Employee[]

  constructor(private _dialog:MatDialog,
    private empService:EmployeeService){

  }

  ngOnInit(): void {
    
  }

  openAddDialog(){
    let dialog = this._dialog.open(AddEditComponent)
    dialog.afterClosed().subscribe({
      next:(data:any)=>{
        if(data){
          this.empService.employee.next('')
        }
      }
    })
  }


}

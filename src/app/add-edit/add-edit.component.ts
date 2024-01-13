import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  empForm = new FormGroup({})

  constructor(private fb : FormBuilder,
    private _dialogRef:MatDialogRef<AddEditComponent>,
    private empService:EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {

    this.empForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      age:[''],
      experience:[''],
      address:new FormArray([])
    })
    this.empForm.patchValue(this.data)

    for(let i of this.data.address){
      this.addEmployeeAddress()
      this.empForm.get('address')?.patchValue(this.data.address)
    }
  }

  get employeeAddres(){
    return this.empForm.get('address') as FormArray
      
  }

  addEmployeeAddress(){
    let address = this.fb.group({
      houseNo:[''],
      streetName:[''],
      landmark:[''],
      cityName:[''],
      stateName:[''],
      country:['']
    })
    this.employeeAddres.push(address)
  }

  removeEmployeeAddress(index:number){
    this.employeeAddres.removeAt(index)
  }

  onSubmit(){
    this.empService.addEmployee(this.empForm.value).subscribe({
      next:(data:any)=>{
        this._dialogRef.close(true)
      }
    })
  }

  cancel(){
    this._dialogRef.close()
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api= 'http://localhost:3000/employee'

  employee = new Subject()

  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get(this.api)
  }

  getEmployeeById(id:number){
    return this.http.get(this.api + '/' +id)
  }

  addEmployee(data:any){
    return this.http.post(this.api,data)
  }

  updateEmployee(id:number,data:any){
    return this.http.put(this.api + '/' + id, data)
  }

  deleteEmployee(id:number){
    return this.http.delete(this.api + '/' + id)
  }
}

import { Component,  OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allEmployees : any = [];

  addEmployeeForm = this.fb.group({
    name: ['', Validators.required],
    contact: ['', [Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private api:ApiService){}

  ngOnInit(): void {
    this.getAllEmployees();
  }


 
  getAllEmployees(){
    this.api.allemployees().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allEmployees = res
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }


  addEmployee () {

    const name = this.addEmployeeForm.value.name
    const email = this.addEmployeeForm.value.email
    const contact = this.addEmployeeForm.value.contact
    const address = this.addEmployeeForm.value.address

    console.log(email);
    

    this.api.addemployee(name,email,contact,address).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getAllEmployees()
        alert("Sccessfully Added")
      },
      error:(err:any)=>{
        console.log(err);
        alert("Please complete the form")
      }  
    })
  }
}

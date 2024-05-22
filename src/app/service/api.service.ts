import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const options = {
//   headers:new HttpHeaders()
// }

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = "https://touchworld-backend.onrender.com"

  constructor(private http:HttpClient) { }

  allemployees(){
    return this.http.get(`${this.base_url}/allemployees`)
  }

  addemployee= (name:any,email:any,contact:any,address:any) => {
    const body ={
      name,
      email,
      contact,
      address
    }
    console.log(body);

    // const headers = new HttpHeaders().set('Authorization', 'Bearer token');
    
    return this.http.post(`${this.base_url}/addEmployee`,body)
  }
}

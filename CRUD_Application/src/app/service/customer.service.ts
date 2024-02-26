import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASIC_URL=["http://localhost:8082/api"] 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  postCustomer(customer:any):Observable<any>{
    return this.http.post(BASIC_URL+"/customer",customer);
  }

  getAllCustomers():Observable<any>{
    return this.http.get(BASIC_URL+"/customers");
  }

  deleteCustomer(id:number):Observable<any>{
    return this.http.delete(BASIC_URL+"/customer/"+id);
  }
  getCustomerById(id:number):Observable<any>{
    return this.http.get(BASIC_URL+"/customer/"+id);
  }
  updateCustomer(id:number,customer:any):Observable<any>{
    return this.http.put(BASIC_URL+"/customer/"+id,customer);
  }
}

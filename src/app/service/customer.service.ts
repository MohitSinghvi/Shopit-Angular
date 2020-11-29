import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  constructor(private httpClient: HttpClient) { }

  findCustomerById(id){
    return this.httpClient.get("http://localhost:8080/customers/"+id);
  }

  updateAddressAndPhone(customer){
    return this.httpClient.post("http://localhost:8080/customers/updateAddressAndPhone",customer);
  }


}

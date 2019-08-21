import { PaymentDetail } from './payment-detail.model';
import { BasketItem } from './basket-item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CustomerDetail } from './customer-detail.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly rootURL = 'http://localhost:59035/api';

  customerList : CustomerDetail[];

  constructor(private http: HttpClient) { }

  postCustomerAdd(cust) {
    return this.http.post(this.rootURL + '/Customers', cust);
  }

  getCustomerList(){
    this.http.get(this.rootURL + '/Customers/')
    .toPromise()
    .then(res => this.customerList = res as CustomerDetail[]);
  }
}

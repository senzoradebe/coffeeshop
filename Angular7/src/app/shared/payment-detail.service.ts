import { PaymentDetail } from './payment-detail.model';
import { BasketItem } from './basket-item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CoffeeDetail } from './coffee-detail.model';
import { BasketData } from '../shared/basket-data.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: BasketItem;
  coffeeListData: CoffeeDetail;
  readonly rootURL = 'http://localhost:59035/api';
  list : PaymentDetail[];
  coffeeList : CoffeeDetail[];

  constructor(private http: HttpClient) { }

  postCustomerPurchase(basket :BasketData) {
    return this.http.post(this.rootURL + '/PaymentDetail', basket);
  }

  getCoffeeList(){
    return this.http.get
  }
  refreshList(){
    this.http.get(this.rootURL + '/PaymentDetail/')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);

  }

  refreshCoffeeList(){
    this.http.get(this.rootURL + '/Coffees/')
    .toPromise()
    .then(res => this.coffeeList = res as CoffeeDetail[]);
  }
}

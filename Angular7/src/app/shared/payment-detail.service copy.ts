import { PaymentDetail } from './payment-detail.model';
import { BasketItem } from './basket-item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CoffeeDetail } from './coffee-detail.model';


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

  postCustomerPurchase(basket: BasketItem[]) {
    return this.http.post(this.rootURL + '/PaymentDetail', basket);
  }
  // putPaymentDetail() {
  //   return this.http.put(this.rootURL + '/PaymentDetail/'+ this.formData.Id, this.formData);
  // }
  // deletePaymentDetail(id) {
  //   return this.http.delete(this.rootURL + '/PaymentDetail/'+ id);
  // }

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

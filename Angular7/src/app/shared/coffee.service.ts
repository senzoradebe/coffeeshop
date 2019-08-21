import { PaymentDetail } from './payment-detail.model';
import { BasketItem } from './basket-item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CoffeeDetail } from './coffee-detail.model';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  coffeeListData: CoffeeDetail;
  readonly rootURL = 'http://localhost:59035/api';
  coffeeList : CoffeeDetail[];

  constructor(private http: HttpClient) { }

  getCoffeeList(){
    this.http.get(this.rootURL + '/Coffees/')
    .toPromise()
    .then(res => this.coffeeList = res as CoffeeDetail[]);
  }
}

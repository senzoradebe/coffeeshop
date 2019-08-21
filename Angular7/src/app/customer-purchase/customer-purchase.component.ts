import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CoffeeService } from '../shared/coffee.service';
import { CustomerService } from '../shared/customer.service';

import { BasketItem } from '../shared/basket-item.model';
import { BasketData } from '../shared/basket-data.model';
import { BasketItemView } from '../shared/basket-item-view.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-purchase',
  templateUrl: './customer-purchase.component.html',
  styleUrls: ['./customer-purchase.component.css']
})
export class CustomerPurchaseComponent implements OnInit {
  basketData : BasketData = new BasketData() 
  basket : BasketItem[] = [];
  basketItemViewList: BasketItemView[] =[];
  item: BasketItemView = new BasketItemView();
  dataDrpDwn : []
  price: Number;
  totalPrice: number = 0;
  
  constructor(private service: PaymentDetailService,
    private coffeeService : CoffeeService,
    private customerService : CustomerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.coffeeService.getCoffeeList();
    this.customerService.getCustomerList();
  }
  
   onCustomerChange(event){
     var customer  =  this.customerService.customerList.filter(function(item){
       return item.Id == event.target.value; 
     })[0];
     this.item.CustomerName = customer.Name
   }

  onChange(event){
    var coffee  =  this.coffeeService.coffeeList.filter(function(item){
      return item.Id == event.target.value; 
    })[0];
    this.item.Price = coffee.Price;
    this.item.CoffeeName = coffee.Name;
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      var index = this.basketItemViewList.findIndex(x => PMId);
      this.basketItemViewList.splice(index, 1);
    }
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
      this.service.formData = {
        CustomerId: 0,
        OrderId: 0,
        CoffeeId: 0,
        Quantity: 0,
        Price : 0
      }
  }
  
  submitBasket() {

    this.basketData.CustomerId = this.item.CustomerId;
    this.basketData.OrderItems = this.basket;

    console.log("^^^^^");
    console.log(this.basketData);
    this.insertRecord(this.basketData);
  }




  addToBasket(){
    this.basket.push({
      CustomerId: this.item.CustomerId,
      OrderId: 0,
      CoffeeId: this.item.Id,
      Quantity: this.item.Quantity,
      Price : this.item.Price
    })

   
    this.basketItemViewList.push(this.item);
    if (this.basketItemViewList.length == 0 ){
      this.totalPrice = this.item.Price;
    }else{
      this.calcultaTotalPrice();
    }

    this.item = new BasketItemView()

  }
  onSelect(event: Event){
    console.log(event)
  }
  calcultaTotalPrice(){
    var total = 0
    for (var i = 0;i<this.basketItemViewList.length -1 ; i++){
      console.log(this.basketItemViewList[i].Price)
      total += this.basketItemViewList[i].Price;
    }
    this.totalPrice = total;
  }

  insertRecord(basket: BasketData) {
    this.service.postCustomerPurchase(basket).subscribe(
      res => {
        debugger;
        //this.resetForm(form);
        console.log("->")
        console.log(res)
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
}

import { PaymentDetailService } from './../../shared/payment-detail.service';
import { CoffeeDetail } from './../../shared/coffee-detail.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {
  dataDrpDwn : []
  price: Number;
  department : number;
  departments : {}[] = [
    {id:1, name:'Help Desk 2'},
    {id:2, name:'Help Desk 1'}
  ]
  constructor(private service: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {

  }

  // remove(index: number) {
  //   this.dataDrpDwn.splice(index,1);
  // }
  // add(){
  //   var newItem = {
  //     'name': null

  //   }
  //   this.dataDrpDwn.push(newItem)
  // }


  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.form.reset();
  //   this.service.formData = {

  //   }
  // }
  
  // onSubmit(form: NgForm) {
  //   if (this.service.formData.Id == 0)
  //     this.insertRecord(form);
  //   else
  //     this.updateRecord(form);
  // }

  // onSelect(): void {
  //   console.log('---------------')
  // }
  // insertRecord(form: NgForm) {
  //   this.service.postCustomerPurchase().subscribe(
  //     res => {
  //       debugger;
  //       this.resetForm(form);
  //       this.toastr.success('Submitted successfully', 'Payment Detail Register');
  //       this.service.refreshList();
  //     },
  //     err => {
  //       debugger;
  //       console.log(err);
  //     }
  //   )
  // }
  // updateRecord(form: NgForm) {
  //   this.service.putPaymentDetail().subscribe(
  //     res => {
  //       this.resetForm(form);
  //       this.toastr.info('Submitted successfully', 'Payment Detail Register');
  //       this.service.refreshList();
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

}

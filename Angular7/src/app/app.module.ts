import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PointsListComponent } from './points-list/points-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerPointsComponent } from './customer-points/customer-points.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { RedeemPointsComponent } from './redeem-points/redeem-points.component';
import { CustomerPurchaseComponent } from './customer-purchase/customer-purchase.component';
import { CoffeeService } from './shared/coffee.service';
import { CustomerService } from './shared/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    PointsListComponent,
    CustomerAddComponent,
    CustomerPointsComponent,
    TransactionListComponent,
    OrderListComponent,
    OrderItemComponent,
    RedeemPointsComponent,
    CustomerPurchaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [PaymentDetailService,CoffeeService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

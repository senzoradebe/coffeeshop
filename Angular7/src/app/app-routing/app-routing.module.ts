import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PointsListComponent } from '../points-list/points-list.component';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerPointsComponent } from '../customer-points/customer-points.component';
import { CustomerPurchaseComponent } from '../customer-purchase/customer-purchase.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { OrderItemComponent } from '../order-item/order-item.component';
import { RedeemPointsComponent } from '../redeem-points/redeem-points.component';
const routes: Routes = [
  { path: '', component: CustomerPurchaseComponent },
  { path: 'customer-add', component: CustomerAddComponent },
  { path: 'customer-points', component: CustomerPointsComponent },
  { path: 'order-item', component: OrderItemComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'points-list', component: PointsListComponent },
  { path: 'redeem-points', component: RedeemPointsComponent },

];

@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

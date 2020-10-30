import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { TrackerComponent } from './tracker/tracker.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

@NgModule({
  declarations: [ShopComponent, AboutUsComponent, TrackerComponent, ContactUsComponent, ShoppingCardComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }

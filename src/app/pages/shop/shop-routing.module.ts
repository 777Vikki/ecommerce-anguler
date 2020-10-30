import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShopComponent } from "./shop/shop.component";
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
  {
    path: "",
    component: ShopComponent,
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
  },
  {
    path: "tracker",
    component: TrackerComponent,
  },
  {
    path: "shopping-card",
    component: ShoppingCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}

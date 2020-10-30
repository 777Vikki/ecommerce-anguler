import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "../../services/cart.service";
@Component({
  selector: "shared-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  noOfItems: number;
  subscriptions: Subscription[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.cartService.getCardObservable().subscribe((d) => {
        this.noOfItems = d.length;
      })
    );
  }

  unsubscribe() {
    if (this.subscriptions && this.subscriptions.length) {
      this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
        this.subscriptions = [];
      });
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}

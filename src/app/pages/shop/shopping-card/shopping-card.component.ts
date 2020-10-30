import { Component, OnInit } from "@angular/core";
import { ICarouselDesc } from "src/app/shared/models";
import { CartService } from "../../../shared/services/cart.service";

@Component({
  selector: "app-shopping-card",
  templateUrl: "./shopping-card.component.html",
  styleUrls: ["./shopping-card.component.scss"],
})
export class ShoppingCardComponent implements OnInit {
  cartItems: ICarouselDesc[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCardObservable().subscribe((d) => {
      this.cartItems = d;
    });
  }

  deleteItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartService.updateCardItem(this.cartItems);
  }
}

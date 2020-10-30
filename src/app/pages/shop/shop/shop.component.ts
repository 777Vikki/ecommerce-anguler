import { Component, OnInit } from "@angular/core";
import { productsDetail, ICarouselDesc } from "../../../shared/models";
import { CartService } from "../../../shared/services/cart.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"],
})
export class ShopComponent implements OnInit {
  electronicItems = productsDetail.electornicData();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  cardItem(item: ICarouselDesc) {
    this.cartService.saveCardItem(item);
    console.log(item)
  }
}

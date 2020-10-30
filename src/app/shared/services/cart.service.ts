import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ICarouselDesc } from "../models"; 
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cardItems: ICarouselDesc[] = [];
  private cardItemObservable = new BehaviorSubject<ICarouselDesc[]>([]);
  constructor() {
    const localStogateData = localStorage.getItem("cardItems");
    if (localStogateData) {
      this.cardItems = JSON.parse(localStogateData);
      this.cardItemObservable.next(this.cardItems);
    }
  }

  private save(items: ICarouselDesc[]) {
    localStorage.setItem("cardItems", JSON.stringify(items));
    this.cardItemObservable.next(items);
  }

  saveCardItem(item: ICarouselDesc) {
    this.cardItems.push(item);
    this.save(this.cardItems);
  }

  getCardObservable(): Observable<ICarouselDesc[]> {
    return this.cardItemObservable.asObservable();
  }

  updateCardItem(items: ICarouselDesc[]) {
    this.cardItems = items;
    this.save(this.cardItems);
  }
}

import { Component, Input, OnInit, Output,EventEmitter } from "@angular/core";
import { Guid } from "guid-typescript";
import { ICarousel, ICarouselDesc } from "../../models";
enum CarouselClzzEnum {
  one = "col-12",
  two = "col-6",
  three = "col-4",
  four = "col-3",
  six = "col-2",
  twelve = "col-1",
}

@Component({
  selector: "shared-carousel-image",
  templateUrl: "./carousel-image.component.html",
  styleUrls: ["./carousel-image.component.scss"],
})
export class CarouselImageComponent implements OnInit {
  @Input() noOfBlock = 4;
  @Input() carouselClzz: string;
  @Input() carouselData: ICarousel;
  @Output() selectedCardItem = new EventEmitter<ICarouselDesc>();
  isCarouselControl: boolean;
  carouselDescription: ICarouselDesc[][] = [];
  _courselId = "carousel" + Guid.raw() + "Indicators";

  constructor() {}

  ngOnInit(): void {
    this.setCourselArray();
    this.carouselClzz = this.carouselClzz
      ? this.carouselClzz
      : this.getCarouselClzz();
  }

  setCourselArray() {
    const fullCoursel = Math.floor(this.carouselData.carouselDesc.length / this.noOfBlock);
    const partialCoursel = this.carouselData.carouselDesc.length % this.noOfBlock;
    if (this.carouselData.carouselDesc.length > 0) {
      if (fullCoursel) {
        for (var i = 0; i < fullCoursel; i++) {
          this.carouselDescription.push(this.carouselData.carouselDesc.slice(i, i + this.noOfBlock));
        }
      }

      if (partialCoursel) {
        this.carouselDescription.push(
          this.carouselData.carouselDesc.slice(
            fullCoursel * this.noOfBlock,
            fullCoursel * this.noOfBlock + partialCoursel
          )
        );
      }
    }
  }

  addToCard(item: ICarouselDesc) {
    this.selectedCardItem.next(item);
  }

  getCarouselClzz() {
    switch (this.noOfBlock) {
      case 1: {
        return CarouselClzzEnum.one;
      }

      case 2: {
        return CarouselClzzEnum.two;
      }

      case 3: {
        return CarouselClzzEnum.three;
      }

      case 4: {
        return CarouselClzzEnum.four;
      }

      case 6: {
        return CarouselClzzEnum.six;
      }

      case 12: {
        return CarouselClzzEnum.twelve;
      }

      default: {
        return CarouselClzzEnum.three;
      }
    }
  }
}

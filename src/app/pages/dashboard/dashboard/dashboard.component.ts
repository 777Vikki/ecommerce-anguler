import { Component, Input, OnInit } from "@angular/core";
import { Guid } from "guid-typescript";

interface ICoursel {
  image: string;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  @Input() noOfBlock = 2;
  imgLink =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tourism_in_London795.jpg/800px-Tourism_in_London795.jpg";
  images: ICoursel[] = [];
  courselImages: ICoursel[][] = [];
  _courselId = "carousel" + Guid.raw() + "Indicators";

  constructor() {}

  ngOnInit(): void {
    this.getImage();
    this.setCourselArray();
  }

  setCourselArray() {
    const fullCoursel = Math.floor(this.images.length / this.noOfBlock);
    const partialCoursel = this.images.length % this.noOfBlock;
    if (this.images.length > 0) {
      if (fullCoursel) {
        for (var i = 0; i < fullCoursel; i++) {
          this.courselImages.push(this.images.slice(i, i + this.noOfBlock));
        }
      }

      if (partialCoursel) {
        this.courselImages.push(
          this.images.slice(
            fullCoursel * this.noOfBlock,
            fullCoursel * this.noOfBlock + partialCoursel
          )
        );
      }
    }
  }

  getImage() {
    this.images = [
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
      {
        image: this.imgLink,
      },
    ];
  }
}

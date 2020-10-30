import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselImageComponent } from "./components/carousel-image/carousel-image.component";
import { IconsModule } from "./modules/icons/icons.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CarouselImageComponent, NavbarComponent],
  imports: [CommonModule, IconsModule, RouterModule],
  exports: [CarouselImageComponent, IconsModule, NavbarComponent],
})
export class SharedModule {}

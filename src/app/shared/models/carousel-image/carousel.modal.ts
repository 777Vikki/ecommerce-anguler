export interface ICarousel {
  header: string;
  carouselDesc: ICarouselDesc[];
}

export interface ICarouselDesc {
  _id: string;
  title: string;
  description: string;
  imagePath: string;
}

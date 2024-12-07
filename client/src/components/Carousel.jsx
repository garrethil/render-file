import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <div className="flex justify-center">
        <img src="/renderFile1.png" alt="image 1" className="h-1/2 w-2/3" />
      </div>
      <div className="flex justify-center">
        <img
          src="/renderFile2.png"
          alt="image 2"
          className="h-1/2 w-2/3 object-cover"
        />
      </div>
    </Carousel>
  );
}

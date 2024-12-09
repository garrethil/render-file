import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  const images = [
    { src: "/renderFile1.png", alt: "Image 1" },
    { src: "/renderFile2.png", alt: "Image 2" },
    { src: "/event1.png", alt: "Image 3" },
    { src: "/renderFile3.png", alt: "Image 4" },
  ];

  return (
    <div className="flex items-center justify-center">
      <Carousel className="h-[500px] w-full sm:h-[400px] md:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-full w-full"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-full w-full sm:max-w-[500px] md:max-w-[800px] object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

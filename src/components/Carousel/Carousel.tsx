import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { images } from "../../data/CarouselData";
import "./Carousel.css";

interface Props {
  slides: any[];
  options: any;
}

const EmblaCarousel = (props: Props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index: number) => {
            const imageData = images[index % images.length];
            return (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  src={imageData.src}
                  alt={imageData.alt}
                />
                <p className="embla__text p__cormorant">{imageData.alt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

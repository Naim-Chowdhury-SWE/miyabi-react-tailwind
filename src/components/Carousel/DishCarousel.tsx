import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import "./DishCarousel.css"

type DishCarouselProps = {
    images: string[];
    options?: EmblaOptionsType;
  };
  
 export const DishCarousel: React.FC<DishCarouselProps> = ({ images, options }) => {
    const [emblaRef] = useEmblaCarousel(options);
  
    return (
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  src={image.toString()}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
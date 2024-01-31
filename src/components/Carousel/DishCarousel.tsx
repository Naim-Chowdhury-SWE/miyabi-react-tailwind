import useEmblaCarousel from 'embla-carousel-react';
import "./DishCarousel.css";

type DishCarouselProps = {
  images: string[];
};

export const DishCarousel: React.FC<DishCarouselProps> = ({ images}) => {
  const [emblaRef] = useEmblaCarousel();
  
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
  
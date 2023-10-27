import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import ReactPlayer from "react-player";

export const Presentation = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="presentation" id="presentation">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="presentation-bx wow zoomIn">
              <h2>Prezentarea facultatii</h2>
              <p>
                Bine ați venit! În anul 1966, Facultatea de Automatică și
                Calculatoare oferea țării prima promoție în specialitatea
                „Calculatoare electronice”. De atunci și până astăzi, facultatea
                noastră asigură pregătirea inginerilor în programe de studii
                aparținând domeniilor Calculatoare, Ingineria Sistemelor și
                Informatică. Misiunea noastră este: Pregătirea inginerilor IT cu
                înaltă calificare, cu cunoștințe și abilități de automatică,
                software și hardware.
              </p>
              <p>
                Sectiile noastre, impreuna cu procentul de promovare al
                studentilor:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme presentation-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CTI RO</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CTI ENG</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>IS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>INFO</h5>
                </div>
              </Carousel>
              <ReactPlayer
                className="react-player-yt"
                url="<https://www.youtube.com/watch?v=3teYd0Mt9uA>"
                controls
                width="75rem"
                height="25rem"
              />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

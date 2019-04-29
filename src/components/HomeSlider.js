import React from "react";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "../css/HomeSlider.css";

class HomeSlider extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={90}
        naturalSlideHeight={50}
        totalSlides={7}
        interval={5000}
        isPlaying={true}
        visibleSlides={1.2}
        className="SlideContainer"
      >        
        <Slider >
          <Slide index={0} className="Slide"><img src="https://younglions.cf/images/gallery/1.jpg"/></Slide>
          <Slide index={1} className="Slide"><img src="https://younglions.cf/images/gallery/2.jpg"/></Slide>
          <Slide index={2} className="Slide"><img src="https://younglions.cf/images/gallery/3.jpg"/></Slide>
          <Slide index={3} className="Slide"><img src="https://younglions.cf/images/gallery/4.jpg"/></Slide>
          <Slide index={4} className="Slide"><img src="https://younglions.cf/images/gallery/5.jpg"/></Slide>
          <Slide index={5} className="Slide"><img src="https://younglions.cf/images/gallery/6.jpg"/></Slide>
          <Slide index={6} className="Slide"><img src="https://younglions.cf/images/gallery/7.jpg"/></Slide>
        </Slider>
     
      </CarouselProvider>
    );
  }
}
  export default HomeSlider;
  
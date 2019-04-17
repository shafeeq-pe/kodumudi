import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
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
        visibleSlides={3}
        className="SlideContainer"
      >        
        <Slider >
          <Slide index={0} className="Slide">I am the first Slide.</Slide>
          <Slide index={1} className="Slide">I am the second Slide.</Slide>
          <Slide index={2} className="Slide">I am the third Slide.</Slide>
          <Slide index={3} className="Slide">I am the second Slide.</Slide>
          <Slide index={4} className="Slide">I am the third Slide.</Slide>
          <Slide index={5} className="Slide">I am the second Slide.</Slide>
          <Slide index={6} className="Slide">I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
  export default HomeSlider;
  
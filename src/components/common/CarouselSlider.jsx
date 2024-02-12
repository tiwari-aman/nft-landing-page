//** Package Imports */
import Slider from "react-slick";
import PropTypes from "prop-types";

//** File Imports */
import SliderArrow from "./SliderArrow";

export default function CarouselSlider({ data, contentToRender }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SliderArrow dir="prev" />,
    nextArrow: <SliderArrow dir="next" />,
    responsive: [
      { breakpoint: 1040, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {data?.map((props, index) => (
        <div key={index}>{contentToRender(props)}</div>
      ))}
    </Slider>
  );
}

CarouselSlider.propTypes = {
  data: PropTypes.array,
  contentToRender: PropTypes.element,
};

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Slider from "react-slick";
import { carousel } from "./constant";

const Carousel = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="carousel-wrapper">
            <Slider {...settings}>
                {carousel.map((d, i) => (
                    <div key={i} className="carosel">
                        <div className="t">
                            <h1>{d.name}</h1>
                        </div>
                        <div className="img">
                            <img src={d.image} alt="" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

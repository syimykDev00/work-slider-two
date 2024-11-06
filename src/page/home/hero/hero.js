import React from "react";
import Slider from "react-slick";
import sliderImage from './../../../assets/img/sliderImage.jpeg';  // Убедитесь, что путь правильный

// Добавьте CSS для слайдера, если еще не добавлено
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={sliderImage} alt="Изображение 1" />
                </div>
                <div>
                    <img src={sliderImage} alt="Изображение 2" />
                </div>
                <div>
                    <img src={sliderImage} alt="Изображение 3" />
                </div>
                <div>
                    <img src={sliderImage} alt="Изображение 4" />
                </div>
                <div>
                    <img src={sliderImage} alt="Изображение 5" />
                </div>
                <div>
                    <img src={sliderImage} alt="Изображение 6" />
                </div>
            </Slider>
        </div>
    );
}

export default AutoPlay;

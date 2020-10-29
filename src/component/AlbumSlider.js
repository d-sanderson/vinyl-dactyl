import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";


const AlbumSlider = ({ children }) => {
    const sliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 9,
        speed: 500,
      };
    return <Slider {...sliderSettings}>{children}</Slider>;
};

export default AlbumSlider;

import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import BackgroundImage from '../BackgroundImage';

import prev from './slickPrev.svg';
import next from './slickNext.svg';

import './dotsStyle';

const Arrow = (props) => (
  <BackgroundImage
    position="absolute"
    top="50%"
    ratio={1}
    w="3em"
    zIndex={1}
    {...props}
  />
);

const Slick = (props) => (
  <Slider
    dots
    nextArrow={<Arrow src={next} right="0" transform="translate(-50%, -50%)" />}
    prevArrow={<Arrow src={prev} left="0" transform="translate(50%, -50%)" />}
    centerMode
    slidesToShow={1}
    slidesToScroll={1}
    {...props}
  />
)

Slick.propTypes = {

};

export default Slick;

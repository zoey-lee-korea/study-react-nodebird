import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global } from './styles';

const ImagesZoom = ({ images, onClose }) => {
    
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
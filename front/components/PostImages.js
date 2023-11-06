import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';


const PostImages = ({ images }) => {

    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(() => {
      setShowImagesZoom(true);
    }, []);
    const onClose = useCallback(() => {
      setShowImagesZoom(false);
    }, []);

    // Image 1개
    if (images.length === 1) {
      return (
        <>
          <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
      );
    }

    // Image 2개
    if (images.length === 2) {
        return (
          <>
            <div>
              <img role="presentation" style={{ width: '50%', display: 'inline-block'}} src={images[0].src} alt={images[0].src}  onClick={onZoom} />
              <img role="presentation" style={{ width: '50%', display: 'inline-block'}} src={images[1].src} alt={images[1].src} onClick={onZoom} />
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
          </>
        );
      }

    // Image 3개 이상
    return (
        <>
          <div>
            <img role="presentation" src={images[0].src} alt={images[0].src} width="50%" onClick={onZoom} />
            <div
              role="presentation"
              style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
              onClick={onZoom}
            >
              <PlusOutlined />
              <br />
              {images.length - 1}
              개의 사진 더보기
            </div>
          </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    )
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })).isRequired,
};
  
export default PostImages;
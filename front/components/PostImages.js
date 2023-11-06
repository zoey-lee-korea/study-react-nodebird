import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';


const PostImages = ({ images }) => {

    return (
        <div> Post Images</div>
    )
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })).isRequired,
};
  
export default PostImages;
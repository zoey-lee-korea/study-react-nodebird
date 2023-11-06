import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from '../reducers/post';

const PostForm = () => {
    
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">

    </Form>
  );
};

export default PostForm;
import { Button, Form, Input } from 'antd';
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
  const [commentText, setCommentText] = useState('');
  const onChangeCommentText = useCallback((e) => {
      setCommentText(e.target.value);
    }, []);
  
  const dispatch = useDispatch();
  const onSubmitComment = useCallback(() => {
    console.log(commentText);
    dispatch({
        type: ADD_COMMENT_REQUEST ,
        data: {content: commentText, postId: post.id, userId: id}
    })
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} />
        <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">댓글</Button>
      </Form.Item>
    </Form>
  )
}


CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;
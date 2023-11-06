import { Button, Form, Input } from 'antd';
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ post }) => {
    return (
        <Form>
            댓글 폼
        </Form>
    )
}


CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;
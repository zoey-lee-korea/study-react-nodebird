import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import PostImages from './PostImages';
import CommentForm from './CommentForm';

const PostCard = ( {post} ) => {
  const id = useSelector((state) => state.user.me && state.user.me.id);
  
  const [liked, setLiked] = useState(false);  
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />} // antd에서 제공하는 Image 옵션
        actions={[ // antd/icons
          <RetweetOutlined key="retweet" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover key="more" 
            content={(
              <Button.Group>
                {id && post.User.id === id // 내가 쓴 글만 수정,삭제 가능/ 신고는 나 이외의 사람만 가능
                  ? (
                    <>
                      <Button>수정</Button>
                      <Button type="danger">삭제</Button>
                    </>
                  )
                  : <Button>신고</Button>}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>
        ]}
        >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`} // antd 공식문서에서 참고하여 옵션 사용
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(<Avatar>{item.User.nickname[0]}</Avatar>)}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({ // shape : 여러개 선언하고 싶은 경우
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
  }),
};

export default PostCard;
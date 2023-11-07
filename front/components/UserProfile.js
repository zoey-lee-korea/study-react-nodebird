import { Avatar, Card, Button } from 'antd';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
    const { user, logOutLoading } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction);
    },[]);

    return (
        <div>
            <Card
                actions={[
                    <div key='twit'>트윗<br/>{user.Posts.length}</div>,
                    <div key='followings'>팔로잉<br/>{user.Followings.length}</div>,
                    <div key='followers'>팔로워<br/>{user.Followers.length}</div>,
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar>{user.nickname[0]}</Avatar>}
                    title={user.nickname}
                />

                <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button> 
            </Card> 
        </div>
    );
};

export default UserProfile;
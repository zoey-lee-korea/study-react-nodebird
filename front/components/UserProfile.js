import { Avatar, Card, Button } from 'antd';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    // const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction);
    },[]);

    return (
        <div>
            <Card
                actions={[
                    <div key='twit'>트윗<br/>0</div>,
                    <div key='followings'>팔로잉<br/>0</div>,
                    <div key='followers'>팔로워<br/>0</div>,
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar>zoey</Avatar>}
                    title='zoey'
                />

                <Button onClick={onLogOut}>로그아웃</Button> 
            </Card> 
        </div>
    );
};

export default UserProfile;
import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const { user } = useSelector(state => state.user);
    useEffect(() => {
        if (!(user && user.id)) {
            Router.push('/');
        }
    }, [user && user.id]);
    if (!user) {
        return null;
    }

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList
                    header="팔로잉 목록"
                    data={user.Followings}
                />
                <FollowList
                    header="팔로워 목록"
                    data={user.Followers}
                />
            </AppLayout>
        </>
    );
};

export default Profile;
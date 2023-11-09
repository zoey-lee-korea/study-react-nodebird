import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
    const { user } = useSelector((state) => state.user);
    const { mainPosts } = useSelector(state => state.post);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);

    return (
        <AppLayout>
            <Head>
                <title>NodeBird</title>
            </Head>
            {user && <PostForm />}
            {mainPosts.map((post) => {
                return (
                    <PostCard key={post.id} post={post} />
                );
            })}
        </AppLayout>
    );
};

export default Home;
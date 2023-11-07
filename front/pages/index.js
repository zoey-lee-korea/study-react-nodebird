import Head from 'next/head';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
    const { me } = useSelector((state) => state.user);
    const { mainPosts } = useSelector(state => state.post);

    return (
        <AppLayout>
            <Head>
                <title>NodeBird</title>
            </Head>
            {me && <PostForm />}
            {mainPosts.map((post) => {
                return (
                <PostCard key={post.id} post={post} />
                );
            })}
        </AppLayout>
    );
};

export default Home;
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <AppLayout>
            <Head>
                <title>NodeBird</title>
            </Head>
            <div>Hello</div>
        </AppLayout>
    );
};

export default Home;
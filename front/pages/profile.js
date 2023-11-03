import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{ nickname: 'follower1' }, { nickname: 'follower2' }, { nickname: 'follower3' }];
    const followingList = [{ nickname: 'following1' }, { nickname: 'following2' }, { nickname: 'following3' }];
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList
                    header="팔로잉 목록"
                    data={followingList}
                />
                <FollowList
                    header="팔로워 목록"
                    data={followerList}
                />
            </AppLayout>
        </>
    );
};

export default Profile;
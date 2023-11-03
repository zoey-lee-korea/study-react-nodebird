import Link from 'next/link';
import { Menu, Input, Button } from 'antd';
import PropTypes from 'prop-types';

const AppLayout = ({children}) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>메인</a></Link></Menu.Item>
                <Menu.Item key="signup"><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
            </Menu>
            {children}
        </div>
    );
};

AppLayout.prototype = {
    children : PropTypes.node.isRequired,
}

export default AppLayout;






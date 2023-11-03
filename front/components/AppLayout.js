import React, { useState } from 'react';
import Link from 'next/link';
import { Col, Input, Menu, Row } from 'antd';
import PropTypes from 'prop-types';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const AppLayout = ({children}) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>메인</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail"><Input.Search enterButton style={{ verticalAlign: 'middle' }} /></Menu.Item>
                <Menu.Item key="signup"><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn? <UserProfile setIsLoggedIn = {setIsLoggedIn}/> : <LoginForm setIsLoggedIn = {setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12}>
                {children}
                </Col>
                <Col xs={24} md={6}>
                <a href="https://github.com/zoey-lee-korea/" target="_blank" rel="noreferrer noopener">Made by Zoey</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.prototype = {
    children : PropTypes.node.isRequired,
}

export default AppLayout;






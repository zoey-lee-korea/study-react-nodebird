import React, { useState } from 'react';
import Link from 'next/link';
import { Col, Input, Menu, Row } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({children}) => {
    const { isLoggedIn } = useSelector(state => state.user);
    
    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>메인</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail"><Input.Search enterButton style={{ verticalAlign: 'middle' }} /></Menu.Item>
                <Menu.Item key="signup"><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn? <UserProfile/> : <LoginForm/>}
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






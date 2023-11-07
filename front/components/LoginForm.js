import React, { useCallback, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequestAction } from '../reducers/user';

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    },[]);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[]);

    const dispatch = useDispatch();
    const onSubmitForm = useCallback(() => {
        dispatch(
            loginRequestAction({
                id,
                password,
        }));
    }, [id, password]);

    const FormWrapper = styled(Form)`
        padding: 10px;
    `
    
    const { logInLoading } = useSelector((state) => state.user);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <Input name='user-id' value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <Input 
                    name='user-password' 
                    type='password'
                    value={password} 
                    onChange={onChangePassword} 
                    required />
            </div>
            <div>
                <Button type='primary' htmlType='submit' loading={logInLoading}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </div>
        </FormWrapper>
    );
};

LoginForm.prototype = {
    setlogInDone: PropTypes.func.isRequired,
}

export default LoginForm;
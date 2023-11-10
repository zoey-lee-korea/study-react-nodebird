const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => { // POST /user (회원가입)
    try {
        // 1.중복 ID 체크
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) { // 없으면 null
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }

        // 2.회원가입
        const hashedPassword = await bcrypt.hash(req.body.password, 12); // 10~13 사이의 숫자. 숫자가 클수록 보안이 높아진다. 대신 시간이 더 오래 걸리고 해킹하는데도 시간이 더 걸린다 (적절한 숫자 찾아서 설정)
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('ok');
    }
    catch (error) {
        console.error(error);
        next(error); // status 500
    }
});

router.delete('/', (req, res) => { // DELETE /user
    res.json({ id: 1, content: 'hello' });
});

module.exports = router;
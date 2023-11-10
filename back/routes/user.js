const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => { // POST /user/login (로그인)
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }

        return req.login(user, async (loginErr) => { // passport에서의 login
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

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
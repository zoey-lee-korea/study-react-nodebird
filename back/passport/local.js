const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({ // req.body
        usernameField: 'email',
        passwordField: 'password',
    }, async (email, password, done) => {
        try {
            // 1. 사용자 존재여부
            const user = await User.findOne({
                where: { email }
            });
            if (!user) {
                return done(null, false, { reason: '존재하지 않는 이메일입니다.' });
            }
            // 2. 비밀번호 검증
            const result = await bcrypt.compare(password, user.password);
            if (result) {
                return done(null, user); // 3. 로그인 성공 
            }
            return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        } catch (error) {
            console.error(error);
            return done(error);
        }
    }));
};
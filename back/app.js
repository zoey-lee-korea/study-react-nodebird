const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();

// 서버 실행 시 DB Sequelize 연결
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

// Passport 설정
passportConfig();

// CORS 적용 : res.setHeader('Access-Control-Allow-Origin','*')을 모든 요청에 넣어준다
app.use(cors({
    origin: '*',
    credentials: false,
}));

// 프론트에서 받은 데이터를 req.body에 넣어주는 역할 (Router보다 위쪽에 선언해줘야 한다)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport, Cookie 미들웨어
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send('hello express');
});
app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중!');
});
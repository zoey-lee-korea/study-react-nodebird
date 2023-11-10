const express = require('express');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');

const app = express();

// 서버 실행 시 DB Sequelize 연결
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

// 프론트에서 받은 데이터를 req.body에 넣어주는 역할 (Router보다 위쪽에 선언해줘야 한다)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello express');
});
app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중!');
});
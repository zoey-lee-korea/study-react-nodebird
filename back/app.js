const express = require('express');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});
app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중!');
});
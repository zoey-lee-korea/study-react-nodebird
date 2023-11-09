const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(3065, () => {
    console.log('서버 실행 중!');
});
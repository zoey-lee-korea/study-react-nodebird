const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');


const router = express.Router();

router.post('/', (req, res) => { // POST /post
    res.json({ id: 1, content: 'hello' });
});

router.delete('/', (req, res) => { // DELETE /post
    res.json({ id: 1, content: 'hello' });
});

module.exports = router;
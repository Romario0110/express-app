const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function (req,res,next){
    res.sendFile(path.join(__dirname, '..', 'public','film','film.html'));
});

module.exports = router;
const express = require('express')
const router = express.Router();
const path = require('path');

router.get('/first', (req,res,next) =>{
    res.sendFile(path.join(__dirname, "..", "public", "bootstrap","first"));
});

router.get('/second', (req,res,next) =>{
    res.sendFile(path.join(__dirname, "..", "public", "bootstrap","second"));
});

module.exports = router;
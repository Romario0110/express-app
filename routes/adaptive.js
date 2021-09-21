const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/float', function (req,res,next){
    res.sendFile(path.join(__dirname, '..', 'public','adaptive','float','float.html'));
});

router.get('/flex', function (req,res,next){
    res.sendFile(path.join(__dirname, '..', 'public','adaptive','flex','flex.html'));
});

router.get('/grid', function (req,res,next){
    res.sendFile(path.join(__dirname, '..', 'public','adaptive','grid','grid.html'));
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req,res,netx) => {
    res.render('about', {sample : 'Hello World'});
})

module.exports = router;
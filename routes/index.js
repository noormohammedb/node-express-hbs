let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req,res,next) => {
  let hbsObject = {items: ['apple','mango']};
  let comment = {comment1: {comment_data: 'this is comment', comment_date: '02-05-2020'}};

  res.render('index', {hbsObject, comment, heading: 'this is heading', title: 'index-page'});
});

module.exports = router;
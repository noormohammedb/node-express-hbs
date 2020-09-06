let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req,res,next) => {
  let hbsObject = {items: ['apple','mango']};
  let comment = {comment1: {comment_data: 'hbs is very flexible', comment_date: '02-05-2020'}};
  let admin = {heading: 'if-else in hbs', auth: true};

  res.render('index', {hbsObject, comment, heading: 'loop in hbs', title: 'index-page', admin});
});

module.exports = router;
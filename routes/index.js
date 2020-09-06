let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req,res,next) => {
  let hbsObject = {heading: 'this is heading', items: ['apple','mango'], footer: 'footer lorem', title: 'index-page'};
  res.render('index', hbsObject);
});

module.exports = router;
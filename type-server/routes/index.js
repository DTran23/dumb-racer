var express = require('express');
var router = express.Router();
const User = require('./../model/User');

/* GET home page. */
router.get('/', async (req, res, next) => {

  new User.save().then(({name}) => {
    console.log(name);

    res.status(200).json({ success: true, name });
  }).catch((e) => {
    res.status(400).json({ message: e.message });
  });
  
});

module.exports = router;

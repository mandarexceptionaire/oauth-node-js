var express = require('express');
var config = require('app/config');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res) {
   
    var grantUrl = 'http://localhost:' + config.Port + '/connect';
    res.render('index', { title: 'Welcome to intuit oauth node sample demo',grantUrl: grantUrl });
});
router.get('/display', function (req, res) {
    
    res.render('display', { Port:config.Port ,AccessToken: req.session.AccessToken, AccessTokenSecret: req.session.AccessTokenSecret });
});
module.exports = router;
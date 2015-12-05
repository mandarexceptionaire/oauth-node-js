var express = require('express');
var router = express.Router();
var config = require('app/config');
var 
    request = require('request'),
    qs = require('querystring')

/* GET users listing. */
router.get('/', function (req, res) {
    var sessionData = req.session;
    sessionData.oauth_token_secret = '';
    var postBody = {
        url: config.REQUEST_TOKEN_URL,
        oauth: {
            callback: 'http://localhost:' + 3001 + '/callback/',
            consumer_key: config.consumerKey,
            consumer_secret: config.consumerSecret
        }
    }
    request.post(postBody, function (e, r, data) {
        var requestToken = qs.parse(data)
        sessionData.oauth_token_secret = requestToken.oauth_token_secret
        console.log(requestToken)
        res.redirect('https://appcenter.intuit.com/Connect/Begin?oauth_token=' + requestToken.oauth_token)
    })
});
module.exports = router;
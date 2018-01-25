
/**
 * daniel caime
 */
var express = require('express');

const router = express.Router();

var get = router.get('/', (req, res) => {
    if (req.query['hub.verify_token'] === process.env.WEBHOOK_TOKEN) {
      res.send(req.query['hub.challenge']);
    } else {
      res.send('Error, wrong token'+process.env.WEBHOOK_TOKEN);
    }
  });
  
  
  router.post('/', (req, res) => {
    //return satus
    res.sendStatus(200);
    const data = req.body;
  });

  module.exports = get;
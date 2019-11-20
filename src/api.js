const express = require("express");
const serverless = require("serverless-http");
var cors = require('cors');
var axios = require('axios');

const app = express();
const router = express.Router();

router.get('/', function(req, res, next) {
  axios.get('https://api.typeform.com/forms/eaj1sU/responses?completed=true&page_size=1000',{ headers: { Authorization: 'Bearer Hr3EEcXr52zkTRHrS4N2mTRk4SAZLAd3VwUnsoNbDCK9', "Access-Control-Allow-Origin": "*"} }).then(d => {
      console.log(d)
      res.json(d.data);
  })
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

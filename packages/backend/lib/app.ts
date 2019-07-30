import {ValidationForm} from "@project/common"
import * as formControler from './formControler'
import express = require('express');
import bodyParser = require("body-parser");
import mongodb = require("mongodb")
import MongoClient = mongodb.MongoClient;
import helmet = require('helmet')


// Create a new express application instance
const app: express.Application = express();
app.use(helmet())
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  next();
});

app.get('/', function (req, res) {
  res.send(ValidationForm.email("test"));
});
 

app.post("/form", formControler.saveForm) 

 
app.listen(8000, function () { 
  console.log('Example app listening on port 3000!');
});
// import {ValidationForm} from "@project/common"
import * as formControler from './formControler'
import express = require('express');
import bodyParser = require("body-parser");
import helmet = require('helmet')


// Create a new express application instance
const app: express.Application = express();
const { check } = require('express-validator');

app.use(helmet())
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  next();
});

app.post("/form", [
    check('firstName').not().isEmpty().withMessage('Name must have min 3 characters').isLength({min: 3}),
    check('lastName').not().isEmpty().withMessage('Surname must have min 3 characters').isLength({min: 3}),
    check('email','Your email is not valid').not().isEmpty().isEmail(),
    check('date', 'Chose your date').not().isEmpty().optional(),
  ],
    formControler.saveForm) 


 app.use(express.json());
 
app.listen(8000, function () { 
  // console.log('Example app listening on port 8000!');
});
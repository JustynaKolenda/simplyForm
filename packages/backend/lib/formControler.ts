import { Request, Response } from "express";
import mongodb = require("mongodb")
import MongoClient = mongodb.MongoClient;

const  dbUrl = "mongodb://localhost:27017/simplyForm";
const { validationResult } = require('express-validator');

export const saveForm = (req: Request, res: Response) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
        }
        MongoClient.connect(dbUrl, function(err, client){
            if(err) {
                res.status(500);
                res.json({error : "No conect to database"});
                return err;
            }
            var db = client.db('simplyForm')
            db.collection("form").insert(req.body, function(err: any, doc: any){
                if(err){
                    res.status(500);
                    res.json({error : "Could not be added to the database"});
                    return err;
                }
                res.json(doc); 
                client.close();
            })
            
        })
    }

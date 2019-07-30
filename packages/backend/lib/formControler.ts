import { Request, Response } from "express";
import mongodb = require("mongodb")
import MongoClient = mongodb.MongoClient;

const  dbUrl = "mongodb://localhost:27017/simplyForm";

export const saveForm = (req: Request, res: Response) => {
 
        MongoClient.connect(dbUrl, function(err, client){
            if(err){
                res.status(500);
                res.json({error : true});
                return err;
            }
      
            var db = client.db('simplyForm')
            console.log(req.body)
            db.collection("form").insert(req.body, function(err: any, doc: any){
                if(err){
                    res.status(500);
                    res.json({error : true});
                    return err;
                }
                res.json(doc); 
                client.close();
            })
            
        })
};

var express = require("express"),
    mongodb = require("mongodb"),
    bodyParser = require("body-parser"),
    MongoClient = mongodb.MongoClient,
    app = express();
    dbUrl = "mongodb://localhost:27017/user";

app.use(express.static(__dirname + "/publick"));
app.use(bodyParser.json());    
app.get("/", function(req,res){
    res.send("Hello");
});

app.get("/user", function(req,res){
    MongoClient.connect(dbUrl, function(error, db){
        if(error){
            res.status(500);
            res.json({error : true});
            return;
        } 
            // db.collection("user",function(err,col){
            //     if(err){
            //         console.log("error",err);
            //         return;
            //     }

            //     col.find().toArray((err, docs)=>{
            //         if(err){
            //             console.log('error',err);
            //             return;
            //         }
            //         console.log('liczba',col.count());
            //         console.log('doc',docs)
                    
            //     })
            // })
            db.collection("user").find({}).toArray(function(error, docs) {
                if(error){
                    res.status(500);
                    res.json({error : true});
                    return;
                } 
                res.json(docs);
            });
    });
})

app.post("/userform", function(req,res){
    MongoClient.connect(dbUrl, function(err, db){
        if(err){
            res.status(500);
            res.json({error : true});
            return console.log(err, "pierwsze");
        }
        db.collection("user").insert(req.body, function(err, doc){
            if(err){
                res.status(500);
                res.json({error : true});
                return console.log(err.body, "drugi");
            }
            res.json(doc);
            db.close();
        })
        
    })
})

app.listen("8000", function() {
    console.log("Serwer aktywny !")
});
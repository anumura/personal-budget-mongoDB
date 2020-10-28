const { static } = require("express");
const express=require("express");
const cors=require("cors");
const app=express();
const port= 3000;

let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose=require('mongoose')

const budgetModel=require("./models/budget_schema")

let url = 'mongodb://localhost:27017/Quiz08_db'

app.post("/mybudget",upload.array(), (request, response)=> {
    let newData={
        "title":request.body.title,
        "budget": request.body.budget,
        "color":request.body.color
        };
    //response.send('Result : '+newData.title);
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("Connected to database to Insert data from Post man")
             // Insert operation
            budgetModel.insertMany(newData)
                .then((data)=>{
                    //console.log(data)
                    response.send("Data inserted successfully into database");
                    mongoose.connection.close()
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                })
        })
        .catch((connectionError)=>{
            console.log(connectionError)
        })
});

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("Connected to database")
           // List all entries
            budgetModel.find({})
                    .then((data)=>{
                        app.get('/budget',(req,res)=>{
                            res.json(data);
                        });
                        mongoose.connection.close()
                    })
                    .catch((connectionError)=>{
                        console.log(connectionError)
                    })
        })
        .catch((connectionError)=>{
            console.log(connectionError)
        })

//app.use(cors());
app.use('/',express.static('public'));

 const budget=require('./budget.json');
//  {
//     myBudget:[
//     {
//         title:"Grocery",
//         budget: 400
//     },
//     {
//         title:"Rent",
//         budget: 400
//     },
//     {
//         title:"Utilities",
//         budget: 50
//     }
// ]
// };

app.get('/hello',(req,res)=>{
    res.send("Hello World");
});

//  app.get('/budget1',(req,res)=>{
//      res.json(budget);
//  });

app.listen(port,()=>{
console.log(`API is Serving at http://localhost:${port}`)
});

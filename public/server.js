const { static } = require("express");
const express=require("express");
const app=express();
const port= 3000;

app.use('/',express.static('public'));

const budget={
    myBudget:[
    {
        title:"Grocery",
        budget: 400
    },
    {
        title:"Rent",
        budget: 400
    },
    {
        title:"Utilities",
        budget: 50
    },
    {
        title:"Shopping",
        budget: 120
    },
    {
        title:"EMI",
        budget: 560
    },
    {
        title:"Insurance per month",
        budget: 50
    },
    {
        title:"Gadgets",
        budget: 100
    },
    {
        title:"Cab",
        budget: 50
    }
]
};
app.get('/budget',(req,res)=>{
    res.json(budget);
});
app.get('/hello',(req,res)=>{
     res.send("I am from inner Server.js file");
});
app.listen(port,()=>{
    console.log(`Example application is Serving at http://localhost:${port}`)
});
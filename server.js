const { static } = require("express");
const express=require("express");
const app=express();
const port= 3000;

app.use('/',express.static('public'));

 const budget=require('./budget.json');
 //{
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

 app.get('/budget',(req,res)=>{
     res.json(budget);
 });

app.listen(port,()=>{
console.log(`Example application is Serving at http://localhost:${port}`)
});

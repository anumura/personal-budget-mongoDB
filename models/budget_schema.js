const mongoose=require('mongoose')


const budgetSchema= new mongoose.Schema({
    title: {
        type:String,
        trim: true,
        required:true,
        unique: true,
        uppercase:true
    },
    budget:{
        type:Number,
        trim: true,
        required:true
    },
    color:{
        type:String,
        trim: true,
        required:true,
        uppercase:true,
        minlength: 6
    }
},{collection: 'myBudget'})

module.exports=mongoose.model('myBudget',budgetSchema)
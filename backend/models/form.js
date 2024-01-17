const mongoose=require("mongoose")


const formSchema=new mongoose.Schema({
    name:{
        type:String,
        // require:true,
    },
    gender:{
        type:String,
        // require:true,
    },
    nationality:{
        type:String,
        // require:true,
    },
    email:{
        type:String,
        // require:true,
        // unique:true,
    },
    phone:
    {
        type:Number,
        // require:true,
        // unique:true,
    },
    address:
    {
        typr:String,
        // require:true,
    },
    message:
    {
        type:String,
        // require:true,
    },


});
mongoose.model("FORM", formSchema);
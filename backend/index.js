const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors');



const app=express();
const PORT=5100;
require('./models/form')
app.use(cors());
app.use(express.json());


const mongoURL='mongodb+srv://20bcs074:mSWZ6YTmTXbHxHgA@cluster0.keynowj.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoURL,{ useNewUrlParser: true,useUnifiedTopology: true,})
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
  });


app.use('/login', require("./routes/login"));
app.use('/form', require("./routes/form"));
app.use('/admin', require("./routes/admin"));
// app.use(require('./routes/form'))
// app.use(require('./routes/admin'));

app.listen(PORT,()=>{
    console.log("app is listening at port:" ,PORT);
})


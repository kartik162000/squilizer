const express=require('express');
const app=express();
app.use(express.json());

app.use('/todo',require('./src/routes/todoRoutes'));

app.listen(8001,()=>{
    console.log("I am running server");
});

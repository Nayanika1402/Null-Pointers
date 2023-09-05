const express  = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send("Hello from")
})
app.listen(8080,()=>{
    console.log("Server Start On PORT 8000");
})
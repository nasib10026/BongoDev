const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//? parse request.json type er req bebohar korba.
app.use(bodyParser.json());

//request korbo.kibhabe kore dekhbo.get type er request korbo.first e address ki bola lagbe.http://
app.get('/',(req,res) =>{
    res.json({message:"Welcome to our app"})
})

let users = []
let lastID = 0

//user create korbo

app.post('/users',(req,res)=>{
    const user = req.body
    user.id = ++lastID
    users.push(user)
    res.status(201).json(user)
})

//app take port e rakhbo.port declaration
const port = 5000;
//listen koro ei port e 
app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})
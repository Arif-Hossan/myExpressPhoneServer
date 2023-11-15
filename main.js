const express = require('express');
const phones = require('./phones.json');
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Phoone Data coming soon')
})

app.get('/phones',(req,res)=>{
    res.send(phones);
    console.log('phones are loaded');
})

// dynamically get the single phone
app.get('/phone/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    res.send(phones.find(phone => phone.id ===id));
    console.log('i need data for phone', id);
})

app.listen(port,()=>{
    console.log(`Phone server running on ${port}`);
})
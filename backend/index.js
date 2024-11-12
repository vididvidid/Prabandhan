const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('working fine');
})
app.get('/about',(req,res)=>{
    res.send('about page');
})
app.get('/home',(req,res)=>{
    res.send('home page');
})

app.get('/*',(req,res)=>{
    res.send("Page Not Found");
})

app.listen(4000,()=>{
    console.log('server running at 4000')
});

const path = require('path');

const express = require('express');
const publicPath = path.join(__dirname,'../public');

//heroku
const port = process.env.PORT || 3000;

const app = express();
 
app.use(express.static(publicPath));
app.get('/',(req,res)=>{
res.send('hello');
})

app.listen(3000,()=>{
console.log('server running in port',port);
})
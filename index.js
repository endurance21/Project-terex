const express  = require('express')
require('dotenv').config()
const app = express()



app.get('/', (req, res)=>res.send('hello'))
app.post('/auth',(req, res)=>{res.send('bonjour')})
app.get('/submit',(req, res)=>{res.send('lol')})
app.get('/fetch',(req,res)=>{res.send('ee ehe e he heh e')})



app.listen(process.env.PORT, ()=> console.log("listenig at port 2824"))
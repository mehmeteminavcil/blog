const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

mongoose.set('strictQuery',false);
const dbURL = "mongodb+srv://memo:asd1234@nodeblog.gjxsidc.mongodb.net/?retryWrites=true&w=majority"



mongoose.connect(dbURL, { useNewUrlParser: true,useUnifiedTopology: true})
    .then((result)=> app.listen(3000))
    .catch((err)=> console.log(err))



app.set('view engine','ejs')



app.use(express.static('public'))
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.render('index',{tittle:"Home"})
})

app.get('/about',(req,res)=>{
    res.render('about',{tittle:"About"})
})


app.get('/login',(req,res)=>{
    res.render('login',{tittle:"Login"})
})

app.get('/about-us',(req,res)=>{
    res.redirect('./about')
})



app.use((req,res)=>{
    res.status(404).render('404',{tittle:"404 Error"})
})

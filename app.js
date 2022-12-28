const express = require('express')
const morgan = require('morgan')

const app = express()


app.set('view engine','ejs')

app.listen(3000)

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
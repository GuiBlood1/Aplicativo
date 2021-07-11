const express = require('express')
servidor = express()

servidor.set('view engine','ejs')

servidor.get('/',(req,res)=>{
    res.render('login.ejs')
})

servidor.get('/registro',(req,res)=>{
    res.render('registro.ejs')
})

servidor.listen(3000,()=>{
    console.log('servidor de pé')
})
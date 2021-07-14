//Importando express e iniciando Servidor//
const express = require('express')
servidor = express()

//Rotas//
servidor.set('view engine','ejs')

servidor.get('/',(req,res)=>{
    res.render('login.ejs')
})

servidor.get('/registro',(req,res)=>{
    res.render('registro.ejs')
})

servidor.get('/login/search',(req,res)=>{

})

servidor.get('/registro/new',(req,res)=>{
    
})

//Servidor ouvindo na porta 3000//
servidor.listen(3000,()=>{
    console.log('servidor de pé')
})

//FrontEnd Dados//





//Banco de dados//
const recebidoE = //Receber o email nessa variável e validar abaixo//
const recebidoS = //Receber a Senha nessa variável e validar abaixo//

//Api MongoDB//
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Aplicativo')
const usuario = mongoose.model('usuarios',{email:String,senha:String})
const novo = new usuario({"email":recebidoE,"senha":recebidoS})

/*novo.save(function(err){
    if (err) throw err
    console.log('inserido')
})*/          //Rodar essa Função quando ele quiser criar um usuário//

/*novo.find*/  //Rodar essa função quando ele quiser logar ou criar um usuário//
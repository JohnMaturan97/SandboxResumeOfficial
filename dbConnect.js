const mongoose = require('mongoose')

const URL = 'mongodb+srv://evo7:dWGYyLqEmhLyWhR4@cluster0.uhobo.mongodb.net/sandbox-resume'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})


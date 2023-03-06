//Podstawy
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

//
app.use(cors())

//Port
const port = 3000

//Czy działa; odp w konsoli
app.get("/", (req, res)=>{
    res.send("ok")
})

//Czy działa; odp w terminalu
app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie:" + port)
})

//Metody http i postman
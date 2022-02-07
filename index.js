const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    res.status(200).send('About Page')
})

app.get('/contact', (req, res) => {
    res.status(200).send('Contact Page')
})

app.get('*', (req, res) => {
    res.status(404).send('Page Can Not Fınd')
})



const port = 3000

app.listen(port,()=>{
    console.log("Port : "+ port )
})
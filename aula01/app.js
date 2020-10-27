const express = require('express')
const app = express()
const port = 3000;


app.get('/Day', (req, resp) => {
    resp.send("Primeiro Endpoint, aula 01 ")
})

app.get('/spi', (req, resp) => {
    resp.send("Aula SPI, aula 01 - service 02 ")
})

app.listen(port, () => {
    console.log('Aplicação com express porta ' + port)
})
const express = require("express")
const app = express()

const PORT = 8080

const estados = require("./data/estados-cidades.json")

app.get("/", (req,res) => {
    res.status(200).json(
        {
            message: "Olá doçura"
        })
})

app.get("/estados/todos", (req,res)=>{
    res.status(200).send(estados)
})

app.get("/estados/:sigla", (req,res)=>{
    const siglaReq = req.params.sigla
    const siglaFilter = estados.find(estado => estado.sigla == siglaReq)

    res.status(200).send(siglaFilter)
})




app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
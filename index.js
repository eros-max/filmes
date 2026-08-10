import express from "express"
import mysql2 from "mysql2"

const app = express()
app.use(express.json())

//EXIBIR

app.get("/showMovies", (req, res) => {
    const showCommand = "SELECT * FROM filmes_ErosMax"

    database.query(showCommand, (error,data) => {
        if(error){
            console.log(error)
        } else {
            res.json(data)
        }
    })
})

//ADICIONAR

app.post("/addMovies", (req, res) =>{
    const {title, genre, duration, ageRating} = req.body

    const addCommand = "INSERT INTO filmes_ErosMax(title, genre, duration, ageRating) VALUES (?, ?, ?, ?)"

    database.query(addCommand, [title, genre, duration, ageRating], (error) => {
        if(error){
            console.log(error)
        } else {
            res.status(201).json({
                message: "Filme ADICIONADO com sucesso!"
            })
        }
    })
})

//DELETAR

app.delete("/deleteMovies/:id", (req, res) =>{
    const { id } = req.params

    const deleteCommand = "DELETE FROM filmes_ErosMax WHERE id = ?"

    database.query(deleteCommand, [id], (error) =>{
        if(error){
            console.log(error)
        } else {
            res.json({
                message: "Filme DELETADO com sucesso!"
            })
        }
    })
})

//ALTERAR

const database = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03MC"
})

app.listen(3333, () => {
    console.log("Server - 3333")
})
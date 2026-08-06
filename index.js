import express from "express"
import mysql2 from "mysql2"

const app = express()
app.use(express.json())

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

app.post("addMovies", (req, res) =>{
    const {title, genre, duration, ageRating} = req.body

    const addCommand = "INSERT INTO filmes_ErosMax(title, genre, duration, ageRating) VALUES (?, ?, ?, ?)"
})

const database = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03MC"
})

app.listen(3333, () => {
    console.log("Server - 3333")
})
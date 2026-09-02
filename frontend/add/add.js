const button = document.querySelector("button")

button.addEventListener("click", cadastrarFilme)

async function cadastrarFilme() {
    // pegar as informações do formulário e enviar para o backend
    const title = document.getElementById("title").value
    const genre = document.getElementById("genre").value
    const ageRating = document.getElementById("ageRating").value
    const duration = document.getElementById("duration").value

    if (title === "" || genre === "" || ageRating === "" || duration === "") {
        alert("Preencha todas as informações!")
        return
    }

    const filme = {
        title,
        genre,
        ageRating,
        duration
    }

    const resposta = await fetch("https://filmesfrontend-eight.vercel.app/addMovies", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(filme)
    })

    const respostaJS = await resposta.json()

    alert(respostaJS.message)

    window.location.href = "../index.html"
}
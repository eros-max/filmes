async function getMovies() {
    // através do acesso a rota GET, trazer os filmes e mostrar na tela
    const resposta = await fetch("https://filmes-seven-inky.vercel.app/")
    const movies = await resposta.json()
    const sectionMovies = document.querySelector(".movies")
    
    movies.forEach((movie) => {
        sectionMovies.innerHTML += `
            <div>
                <h2>${movie.title}</h2>
                <p><strong>Gênero:</strong> ${movie.genre}</p>
                <p><strong>Duração:</strong> ${movie.duration} minutos</p>
                <p><strong>Classificação indicativa:</strong> ${movie.ageRating}</p>

                <button onclick="apagarFilme(${filme.id})">Apagar</button>
            </div>
        `
    })
}

async function apagarFilme(id) {
    const resposta = await fetch(`https://filmes-seven-inky.vercel.app/deleteMovies/${id}`, { method: "DELETE" })
    const respostaJS = await resposta.json()

    alert(respostaJS.message)

    window.location.reload()
}

getMovies()
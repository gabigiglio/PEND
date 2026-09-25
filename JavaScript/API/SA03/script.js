const campoBusca = document.getElementById("campoBusca");
const botaoBuscar = document.getElementById("botaoBuscar");
const resultadoBusca = document.getElementById("resultadoBusca");

const noticiasDestaque = document.getElementById("noticiasDestaque");
const noticiasTecnologia = document.getElementById("noticiasTecnologia");
const noticiasEsportes = document.getElementById("noticiasEsportes");
const noticiasEconomia = document.getElementById("noticiasEconomia");


// Função para buscar notícias na API
async function buscarNoticias(url) {

    try {

        const resposta = await fetch(url);

        // Verifica se a requisição deu certo
        if (!resposta.ok) {
            throw new Error("Erro ao buscar notícias.");
        }

        // Converte a resposta para JSON
        const dados = await resposta.json();

        return dados.articles || [];

    } catch (erro) {

        console.error("Erro:", erro);

        throw erro;
    }
}


// Função para mostrar as notícias no HTML
function mostrarNoticias(noticias, elemento, destaque = false) {

    elemento.innerHTML = "";

    if (noticias.length === 0) {

        elemento.innerHTML = `
            <p>Nenhuma notícia encontrada.</p>
        `;

        return;
    }


    noticias.forEach(noticia => {

        const article = document.createElement("article");

        // Notícias da página inicial
        if (destaque) {
            article.classList.add("principal");
        } else {
            article.classList.add("noticia");
        }


        const imagem = noticia.image_url
            ? noticia.image_url
            : "https://via.placeholder.com/500x300";


        if (destaque) {

            article.innerHTML = `
                <img 
                    src="${imagem}" 
                    alt="${noticia.headline}"
                >

                <div class="overlay">

                    <span>${noticia.source || "NewsToday"}</span>

                    <h2>${noticia.headline}</h2>

                    <a 
                        href="${noticia.url}" 
                        target="_blank"
                    >
                        Ler mais
                    </a>

                </div>
            `;

        } else {

            article.innerHTML = `
                <img 
                    src="${imagem}" 
                    alt="${noticia.headline}"
                >

                <div class="texto">

                    <span>${noticia.source || "NewsToday"}</span>

                    <h2>${noticia.headline}</h2>

                    <p>
                        Confira os detalhes desta notícia
                        na fonte original.
                    </p>

                    <a 
                        href="${noticia.url}" 
                        target="_blank"
                    >
                        Ler mais
                    </a>

                </div>
            `;

        }


        elemento.appendChild(article);

    });
}


// Carrega as notícias quando a página abre
async function carregarNoticias() {

    try {

        // Últimas notícias
        const destaque = await buscarNoticias(
            "https://noozra.com/api/articles?limit=4"
        );

        mostrarNoticias(
            destaque,
            noticiasDestaque,
            true
        );


        // Tecnologia
        const tecnologia = await buscarNoticias(
            "https://noozra.com/api/articles?category=tech&limit=4"
        );

        mostrarNoticias(
            tecnologia,
            noticiasTecnologia
        );


        // Esportes
        const esportes = await buscarNoticias(
            "https://noozra.com/api/articles?category=sports&limit=4"
        );

        mostrarNoticias(
            esportes,
            noticiasEsportes
        );


        // Economia
        const economia = await buscarNoticias(
            "https://noozra.com/api/articles?category=finance&limit=4"
        );

        mostrarNoticias(
            economia,
            noticiasEconomia
        );


    } catch (erro) {

        noticiasDestaque.innerHTML = `
            <p>
                Não foi possível carregar as notícias.
                Tente novamente mais tarde.
            </p>
        `;

    }
}


// Pesquisa de notícias
async function pesquisarNoticias() {

    const termo = campoBusca.value.trim();


    // Verifica se o usuário digitou alguma coisa
    if (termo === "") {

        resultadoBusca.innerHTML = `
            <p>
                Digite alguma coisa para pesquisar.
            </p>
        `;

        return;
    }


    try {

        resultadoBusca.innerHTML = `
            <p>Buscando notícias...</p>
        `;


        // Busca pelo termo digitado
        const noticias = await buscarNoticias(
            `https://noozra.com/api/search?q=${encodeURIComponent(termo)}`
        );


        resultadoBusca.innerHTML = `
            <h2>Resultados para: ${termo}</h2>
        `;


        mostrarNoticias(
            noticias.slice(0, 6),
            resultadoBusca
        );


    } catch (erro) {

        resultadoBusca.innerHTML = `
            <p>
                Erro ao buscar notícias.
                Tente novamente.
            </p>
        `;

    }
}


// Clique no botão
botaoBuscar.addEventListener("click", pesquisarNoticias);


// Permite pesquisar apertando Enter
campoBusca.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        pesquisarNoticias();
    }

});


// Carrega as notícias automaticamente
carregarNoticias();

const cidade = document.getElementById("cidade");
const buscarClima = document.getElementById("buscarClima");
const resultadoClima = document.getElementById("resultadoClima");


async function buscarPrevisao() {

    const nomeCidade = cidade.value.trim();

    if (nomeCidade === "") {
        resultadoClima.innerHTML = `
            <p>Digite o nome de uma cidade.</p>
        `;
        return;
    }

    try {

        resultadoClima.innerHTML = `
            <p>Buscando previsão...</p>
        `;


        // Busca a cidade e suas coordenadas
        const respostaCidade = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(nomeCidade)}&count=1&language=pt&format=json`
        );


        if (!respostaCidade.ok) {
            throw new Error("Erro ao buscar a cidade.");
        }


        const dadosCidade = await respostaCidade.json();


        if (!dadosCidade.results || dadosCidade.results.length === 0) {
            throw new Error("Cidade não encontrada.");
        }


        const local = dadosCidade.results[0];

        const latitude = local.latitude;
        const longitude = local.longitude;


        // Busca a previsão usando latitude e longitude
        const respostaClima = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`
        );


        if (!respostaClima.ok) {
            throw new Error("Erro ao buscar o clima.");
        }


        // Converte para JSON
        const dadosClima = await respostaClima.json();


        const temperatura = dadosClima.current.temperature_2m;
        const sensacao = dadosClima.current.apparent_temperature;
        const vento = dadosClima.current.wind_speed_10m;
        const umidade = dadosClima.current.relative_humidity_2m;


        resultadoClima.innerHTML = `
            <div class="card-clima">

                <h2>${local.name}</h2>

                <p class="temperatura">
                    ${temperatura}°C
                </p>

                <p>
                    🌡️ Sensação: ${sensacao}°C
                </p>

                <p>
                    💧 Umidade: ${umidade}%
                </p>

                <p>
                    💨 Vento: ${vento} km/h
                </p>

            </div>
        `;


    } catch (erro) {

        console.error(erro);

        resultadoClima.innerHTML = `
            <p class="erro">
                ${erro.message}
            </p>
        `;
    }
}


// Clique no botão
buscarClima.addEventListener("click", buscarPrevisao);


// Também permite apertar Enter
cidade.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        buscarPrevisao();
    }

});




const key ="ae67f0fa9175909a243fd479fc79d93f" // Chave para uso da API de previsão de tempo

function dadosNaTela(dados){
    // Funcões a serem mostrada na pagina principal
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "A umidade é de: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    console.log(dados)
}
//Campo para digitar e puxar dentro da API a cindade e informações
async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta=> resposta.json())
    
    dadosNaTela(dados)
    
    

}

// A pesquisa sera feita ao clicar no botão
function cliqueNoBotao(){
    const cidade = document.querySelector(".texto").value
    buscarCidade(cidade)
}
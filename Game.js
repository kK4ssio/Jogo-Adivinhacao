var pontuacao = 0;
var Tentativas = 0;

function Acessar() {
    var nome = document.getElementById("nome").value.trim();

    if (nome === "") {

        alert("Insira seu nome para ter acesso ao jogo!");

    }else{

        setTimeout(function () {
            window.location.href = "Jogo.html";
        }, 3000);

    }

}

var advinhacao = Math.floor(Math.random() * 100) +1;

function adivinhar() {
    var resultado = document.getElementById("resultado");
    var valorinserido = parseInt(document.getElementById("numero").value);
    var distancia = Math.abs(valorinserido - advinhacao);
    console.log(advinhacao);

    if (valorinserido == advinhacao) {

        resultado.textContent = "PARABÉNS! O número que você adivinhou é: " + advinhacao + ". Tentativas: " + Tentativas;
        resultado.style.color = 'green';
        pontuacao += 10;

        setTimeout(function () {

            window.location.href = "Fim.html";
        }, 3000);

    }else{
        Tentativas += 1;
        if (distancia < 10) {
            resultado.style.color = 'red'; // Muito quentE

        }

        else if (distancia < 20) {
            resultado.style.color = 'orange'; // Quente

        }else if (distancia < 30){
            resultado.style.color = 'yellow'; // Morno

        }else{
            resultado.style.color = 'blue'; // Frio

        }

        if (valorinserido > advinhacao) {

            resultado.textContent = "NÃO FOI DESTA VEZ, AMIGO. Tente um número menor! Tentativas: " + Tentativas;

        }else{
            resultado.textContent = "NÃO FOI DESTA VEZ, AMIGO. Tente um número maior! Tentativas: " + Tentativas;

        }

    }
}

function exibirPontuacao() {
    alert("Sua pontuação atual é: " + pontuacao);

}

function denovo() {
    window.location.href = "Jogo.html";

}

function novoPlayer() {
    window.location.href = "Cadastro.html";

}
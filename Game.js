var pontuacao = 0;
var Tentativas = 0;

function adivinhar() {
    document.getElementById("resultado");
    var valorinserido = document.getElementById("numero").value;
    var advinhacao = Math.floor(Math.random() * 100);
    console.log(advinhacao);


    if (valorinserido == advinhacao) {
        resultado.textContent = "PARABÉNS O número que você adinhou é: " + advinhacao + "Tentativas: " + Tentativas;
        resultado.style.color = 'green';
        pontuacao += 10;
        Tentativas += 1;
    } else if (valorinserido > advinhacao) {
        Tentativas += 1;
        resultado.textContent = "NÃO FOI DESTA VEZ, AMIGO. Tente um número menor ! Tentativas: " + Tentativas;
        resultado.style.color = 'blue';
    } else {
        resultado.textContent = "NÃO FOI DESTA VEZ, AMIGO. Tente um número maior ! Tentativas: " + Tentativas;
        resultado.style.color = 'red';
        Tentativas += 1;
    }
}

function exibirPontuacao() {
    alert("Sua pontuação atual é: " + pontuacao);
}

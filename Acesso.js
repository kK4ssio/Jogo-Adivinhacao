
function Acessar() {
    var nome = document.getElementById("nome").value.trim();

    if (nome === "") {
        alert("Insira seu nome para ter acesso ao jogo!");
    } else {
        window.location.href = "Jogo.html";
    }

}

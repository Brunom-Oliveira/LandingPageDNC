var leonardo = document.getElementById("card-leonardo");
var bruna = document.getElementById("card-bruna");
var samanta = document.getElementById("card-samanta");
var setaEsquerda = document.getElementById("setaesquerda");
var setaDireita = document.getElementById("setadireita");

function RolarCarrosselDireita(direcao) {
    leonardo.style.display = "none";
    bruna.style.display = "flex";
    setaEsquerda.style.display = "flex";
    setaEsquerda.style.marginTop = "55%";
    setaDireita.style.display = "none";
}
function RolarCarrosselEsquerda(direcao) {
    leonardo.style.display = "flex";
    bruna.style.display = "none";
    setaEsquerda.style.display = "none";
    setaDireita.style.display = "flex";
    setaDireita.style.marginTop = "33%";
}

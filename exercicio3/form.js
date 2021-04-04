var start = document.querySelector("#Iniciar");
var contador = 0;

var cont = document.querySelector("#demo");


start.addEventListener("click", function clicou(){
    contador++
    atualizarContador(contador)
})

function atualizarContador(novoValor) {
    cont.innerHTML = novoValor
}

// setInterval(contadorFn, 1000);

// function contadorFn() {
//     start.innerHTML = contador++
// }

// const contador = (params) => {
//     start.innerHTML = contador++
// }

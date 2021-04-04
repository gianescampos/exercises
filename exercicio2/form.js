var dados1 = document.querySelector(".input-padrao1");
var dados2 = document.querySelector(".input-padrao2");
var dados3 = document.querySelector(".input-padrao3");

var botaoCacular = document.querySelector("#enviarDados");
botaoCacular.addEventListener("click",function(event){
    event.preventDefault();
    
    var numero1 = Number(dados1.value)
    var numero2 = Number(dados2.value)
    var numero3 = Number(dados3.value)

    var resultado = null

    var resultado = numero1 + numero2 + numero3;

    var resultado = resultado/3;

    if (resultado > 6){
        alert("aprovado")
    }
    else {
        alert("reprovado")
    }
    document.querySelector("#resultado").innerHTML = resultado

});
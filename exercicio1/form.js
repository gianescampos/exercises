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

    if(numero1 > numero2) {
        resultado = numero1
    }
    else {
        resultado = numero2
    }  

      if(numero3 > resultado ) {
        resultado = numero3
      }
    

    document.querySelector("#resultado").innerHTML = resultado

});


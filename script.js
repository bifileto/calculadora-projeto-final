let botaoApertado;
let numeroCompleto = "";


function operacao(){

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        botaoApertado = button.value;
        if(!isNaN(parseInt(botaoApertado))){
          numeroCompleto += botaoApertado;
        } else {
         console.log("cu");
        }

        console.log(numeroCompleto);
        numeroNovo(botaoApertado);
    }); 
});
}

function numeroNovo(numero){
  var display = document.getElementById("newNumber");
  display.innerText += numero;
}

operacao();



let randomNumber = Math.floor(Math.random()*100)
let tentativas = 0
console.log(randomNumber)

function check(){
    let numeroDigitado = document.getElementById('advinhe').value
    let mensagem = document.getElementById("mensagem")
    tentativas ++


    if (numeroDigitado == randomNumber){
        mensagem.innerHTML = "Parabens, voce adivinhou o número em " + tentativas + " Tentativas!"
    }
    else if (numeroDigitado < randomNumber){
        mensagem.innerHTML = "Muito baixo, tente mais uma vez"
    }
    else {
        mensagem.innerHTML = "Muito alto, tente mais uma vez"
    }
    


}
"use strict";
let botao_chute = document.querySelector('#botao_chute');
let input_chute = document.querySelector('#input_chute');
let visor_tentativas = document.querySelector('#visor_tentativas');
let mensagem_acerto = document.querySelector('#mensagem_acerto');
let chute = 0;
let numero_sorteado = 0;
let quantidade_tentativas = 0;
//mensagem_acerto = quantidade_tentativas.toString();
sorteiaNumeroAleatorio();
atualizaVisorTentativas();
//ADICIONA EVENTO DE CLIQUE NO BOTÃO CHUTAR
botao_chute?.addEventListener('click', () => {
    input_chute != null ? chute = input_chute.valueAsNumber : console.log("Elemento INPUT vazio");
    verificarChute(chute);
});
function sorteiaNumeroAleatorio() {
    numero_sorteado = Math.round(Math.random() * 100);
    console.log('Número sorteado: ' + numero_sorteado);
}
function reiniciarJogo() {
    input_chute != null ? input_chute.valueAsNumber = 0 : console.log("Elemento INPUT vazio");
    quantidade_tentativas = 0;
    atualizaVisorTentativas();
    sorteiaNumeroAleatorio();
}
/*function verificarChute(chute: number) {
    if(chute === numero_sorteado) {
        quantidade_tentativas++;
        location.replace("./acerto.html");
    } else {
        if(chute <= 0 || chute > 100) {
            quantidade_tentativas++;
            atualizaVisorTentativas();
            alert('O número deve estar entre 1 e 100!')
        } else {
            switch(true) {
                case (chute > numero_sorteado):
                    quantidade_tentativas++;
                    atualizaVisorTentativas();
                    alert('O chute foi maior que o número sorteado!');
                    break;
                case (chute < numero_sorteado):
                    quantidade_tentativas++;
                    atualizaVisorTentativas();
                    alert('O chute foi menor que o número sorteado!');
                    break;
                default :
                    atualizaVisorTentativas();
                    alert('O chute não pode ser vazio!');
                    break;
            }
        }
    }
}*/
function verificarChute(chute) {
    quantidade_tentativas++;
    switch (true) {
        case (chute === numero_sorteado):
            location.replace("./acerto.html");
            break;
        case (chute <= 0 || chute > 100):
            atualizaVisorTentativas();
            alert('O número deve estar entre 1 e 100!');
            break;
        case (chute > numero_sorteado):
            atualizaVisorTentativas();
            alert('O chute foi maior que o número sorteado!');
            break;
        case (chute < numero_sorteado):
            atualizaVisorTentativas();
            alert('O chute foi menor que o número sorteado!');
            break;
        default:
            atualizaVisorTentativas();
            alert('O chute não pode ser vazio!');
            break;
    }
}
function atualizaVisorTentativas() {
    visor_tentativas != null ? visor_tentativas.innerText = (10 - quantidade_tentativas).toString() : console.log('Elemento de visualização das tentativas vazio');
}

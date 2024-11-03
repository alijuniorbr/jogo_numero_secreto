let botao_chute;
let input_chute: any, visor_tentativas: any;
let chute: number, numero_sorteado: number, quantidade_tentativas: number = 0;
let mensagem: string;


botao_chute = document.querySelector('#botao_chute');
input_chute = document.querySelector('#input_chute');
visor_tentativas = document.querySelector('#visor_tentativas');
//paragrafo_acerto = document.querySelector('#mensagem_acerto');

sorteiaNumeroAleatorio();
atualizaVisorTentativas();

botao_chute?.addEventListener('click', () => {
    chute = input_chute.valueAsNumber;
    verificarChute(chute);
});

function sorteiaNumeroAleatorio() { 
    numero_sorteado = Math.round(Math.random() * 100);
    console.log('Número sorteado: ' + numero_sorteado);
}

function reiniciarJogo() {
    input_chute.valueAsNumber = 0;
    quantidade_tentativas = 0;
    atualizaVisorTentativas();
    sorteiaNumeroAleatorio();
}

function verificarChute(chute: number) {
    if(chute === numero_sorteado) {
        quantidade_tentativas++;
        //atualizaVisorTentativas();
        exibeMensagemVitoria();
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
}

function exibeMensagemVitoria() {
    location.replace("./acerto.html");
    //console.log('Parabéns, otário');
    //mensagem = `Você descobriu o número sorteado em ${quantidade_tentativas} tentativas e venceu o jogo.`;
    //paragrafo_acerto.innerHTML = mensagem;
}

function atualizaVisorTentativas() {
    visor_tentativas.innerText = 10 - quantidade_tentativas;
}
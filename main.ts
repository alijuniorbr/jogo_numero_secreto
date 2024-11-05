let botao_chute: HTMLElement | null = document.querySelector('#botao_chute');
let input_chute: HTMLInputElement | null = document.querySelector('#input_chute');
let visor_tentativas: HTMLElement | null = document.querySelector('#visor_tentativas');
let mensagem_acerto: HTMLParagraphElement | null = document.querySelector('#mensagem_acerto');

let chute: number = 0;
let numero_sorteado: number = 0;
let quantidade_tentativas: number = 0;


switch(window.location.pathname) {
    case '/index.html' :
        sorteiaNumeroAleatorio();
        atualizaVisorTentativas();
        break;
        case '/acerto.html' :
            exibeMensagemVitoria();
        }
        
        botao_chute?.addEventListener('click', () => {
            input_chute != null? chute = input_chute.valueAsNumber : console.log("Elemento INPUT vazio");
            verificarChute(chute);
        });
        
function sorteiaNumeroAleatorio() { 
    numero_sorteado = Math.round(Math.random() * 100);
    console.log('Número sorteado: ' + numero_sorteado);
}

function reiniciarJogo() {
    input_chute != null? input_chute.valueAsNumber = 0 : console.log("Elemento INPUT vazio");
    quantidade_tentativas = 0;
    atualizaVisorTentativas();
    sorteiaNumeroAleatorio();
}

function verificarChute(chute: number) {
    switch (true) { 
        case (chute === numero_sorteado):
            quantidade_tentativas++;
            localStorage.setItem('tentativas', quantidade_tentativas.toString());
            window.location.replace("./acerto.html");
            break; 
        case (chute <= 0 || chute > 100):
                quantidade_tentativas++;
                atualizaVisorTentativas();
                alert('O número deve estar entre 1 e 100!');
            break;
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
        default:
            atualizaVisorTentativas();
            alert('O chute não pode ser vazio!');
            break;
    }
}

function atualizaVisorTentativas() {
    visor_tentativas != null? visor_tentativas.innerText = (10 - quantidade_tentativas).toString() : console.log('Elemento de visualização das tentativas vazio');
}

function exibeMensagemVitoria() {
    let tentativasSalvo: string | null = localStorage.getItem('tentativas');
    console.log(`Valor recuperado: ${tentativasSalvo}`);
    let palavra;

    if(tentativasSalvo != null) {
        let tentativas = parseInt(tentativasSalvo);
        tentativas === 1? palavra = 'tentativa' : palavra = 'tentativas';
        mensagem_acerto != null? mensagem_acerto.innerText = `Parabéns, jogador! Você acertou o número secreto em ${tentativas} ${palavra}.` : null;
    }
}

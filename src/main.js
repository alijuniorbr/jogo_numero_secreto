var botao_chute = document.querySelector('#botao_chute');
var input_chute = document.querySelector('#input_chute');
var visor_tentativas = document.querySelector('#visor_tentativas');
var mensagem_acerto = document.querySelector('#mensagem_acerto');
var chute = 0;
var numero_sorteado = 0;
var quantidade_tentativas = 0;
switch (window.location.pathname) {
    case '/public/index.html':
        sorteiaNumeroAleatorio();
        atualizaVisorTentativas();
        break;
    case '/public/acerto.html':
        exibeMensagemVitoria();
}
botao_chute === null || botao_chute === void 0 ? void 0 : botao_chute.addEventListener('click', function () {
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
function verificarChute(chute) {
    switch (true) {
        case (chute === numero_sorteado):
            quantidade_tentativas++;
            localStorage.setItem('tentativas', quantidade_tentativas.toString());
            window.location.replace("/public/acerto.html");
            break;
        case (chute <= 0 || chute > 100):
            quantidade_tentativas++;
            atualizaVisorTentativas();
            alert('O número deve estar entre 1 e 100!');
            break;
        case (chute > numero_sorteado):
            quantidade_tentativas++;
            atualizaVisorTentativas();
            alert('O número sorteado é menor!');
            break;
        case (chute < numero_sorteado):
            quantidade_tentativas++;
            atualizaVisorTentativas();
            alert('O número sorteado é maior!');
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
function exibeMensagemVitoria() {
    var tentativasSalvo = localStorage.getItem('tentativas');
    var palavra;
    if (tentativasSalvo != null) {
        var tentativas = parseInt(tentativasSalvo);
        tentativas === 1 ? palavra = 'tentativa' : palavra = 'tentativas';
        mensagem_acerto != null ? mensagem_acerto.innerText = "Voc\u00EA acertou o n\u00FAmero secreto em ".concat(tentativas, " ").concat(palavra, ".") : null;
    }
}

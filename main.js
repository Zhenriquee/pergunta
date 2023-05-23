function redirecionarGoogle() {
    window.location.href = 'https://www.youtube.com/watch?v=WiNYFwIfg4w';
}

function moverBotaoNao() {
    var botaoNao = document.getElementById('botao-nao');
    var novaPosicaoEsquerda = Math.random() * 200;
    var novaPosicaoTopo = Math.random() * 100;
    botaoNao.style.position = 'relative';
    botaoNao.style.left = novaPosicaoEsquerda + 'px';
    botaoNao.style.top = novaPosicaoTopo + 'px';
}
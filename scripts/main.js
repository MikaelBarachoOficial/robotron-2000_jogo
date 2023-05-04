const ajuste = document.querySelectorAll('[data-controle]');

ajuste.forEach(elemento => {
    elemento.addEventListener('click', evento => {
        
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        
    });
});

function manipulaDados (sinal, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (sinal == '+') {
        peca.value = parseInt(peca.value) + 1;

    } else if (sinal == '-' && peca.value > 0) {
        peca.value = parseInt(peca.value) - 1;

    }

}
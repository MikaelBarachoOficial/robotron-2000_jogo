const ajuste = document.querySelectorAll('.controle-ajuste');

ajuste.forEach(elemento => {
    console.log(elemento);
    elemento.addEventListener('click', evento => {
        
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        
    });
});

function manipulaDados (sinal, controle) {
    const peca = controle.querySelector('.controle-contador');

    if (sinal == '+') {
        peca.value = parseInt(peca.value) + 1;
    } else if (sinal == '-' && peca.value > 0) {
        peca.value = parseInt(peca.value) - 1;
    }

}
const ajuste = document.querySelectorAll('.controle-ajuste');

ajuste.forEach(elemento => {
    console.log(elemento);
    elemento.addEventListener('click', evento => {
        //console.log(elemento);
        //console.log(evento);

        // console.log(elemento.textContent);
        // console.log(evento.target.textContent);

        //console.log(evento.target.parentNode);
        
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
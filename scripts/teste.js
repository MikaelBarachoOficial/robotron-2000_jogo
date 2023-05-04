const ajuste = document.querySelectorAll('.controle-ajuste');

ajuste.forEach(elemento => {
    elemento.addEventListener('click', evento => {
       
        controlaAjuste(evento.target.textContent, evento.target.parentNode);

    })
})

function controlaAjuste (sinal, peca) {
    const contador = peca.querySelector('.controle-contador');
    
    if (sinal == '-' && contador.value > 0) {
        contador.value--
    
    } else if (sinal == '+') {
        contador.value++

    }
}
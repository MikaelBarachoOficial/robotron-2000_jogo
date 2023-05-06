const ajuste = document.querySelectorAll('[data-controle]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll('[data-estatistica]');

ajuste.forEach(elemento => {
    elemento.addEventListener('click', evento => {
        const sinal = evento.target.dataset.controle;
        manipulaDados(sinal, evento.target.parentNode, evento.target.dataset.peca);
    });
});

function manipulaDados (sinal, controle, peca) {
    const contaPeca = controle.querySelector('[data-contador]');
    
    estatisticas.forEach(estatistica => {
        const nome = estatistica.dataset.estatistica;
        let numero = estatistica.textContent;

        if (sinal == '+') {
            contaPeca.value = parseInt(contaPeca.value) + 1;
            numero = parseInt(numero) + pecas[peca][nome];

        } else if (sinal == '-' && contaPeca.value > 0) {
            contaPeca.value = parseInt(contaPeca.value) - 1;
            numero = parseInt(numero) - pecas[peca][nome];

        }
            estatistica.textContent = numero;

    })

}
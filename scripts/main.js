const botoes = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
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
var contadoresPecas = ['bracos', 'blindagem', 'nucleos', 'pernas', 'foguetes']
var estatisticasNomes = ['forca', 'poder', 'energia', 'velocidade']

contadoresPecas.forEach(contadorPeca => {
    let contadorAtual = document.querySelector(`[data-contador="${contadorPeca}"]`)
    let contadorSalvo = localStorage.getItem(contadorPeca)

    if (contadorSalvo != null) {
        
        contadorAtual.value = contadorSalvo
    }
})

estatisticasNomes.forEach(estatistica => {
    let estatisticaAtual = document.querySelector(`[data-estatistica=${estatistica}]`)
    let estatisticaSalva = localStorage.getItem(estatistica)

    if (estatisticaSalva != null) {
        estatisticaAtual.textContent = estatisticaSalva
    }
})



botoes.forEach(botao => {
    botao.addEventListener('click', evento => {

        let valorContador = evento.target.parentNode.querySelector('[data-contador]')
        let sinal = evento.target.dataset.controle
        let peca = evento.target.dataset.peca

        manipulaDados(sinal, valorContador, peca)

    })
})

function manipulaDados(sinal, contador, peca) {

    estatisticas.forEach(estatistica => {
        let nomeEstatistica = estatistica.dataset.estatistica

        if (sinal == '+') {
            estatistica.textContent = Number(estatistica.textContent) + pecas[peca][nomeEstatistica]
        
        } else if (sinal == '-' && contador.value > 0) {
            estatistica.textContent = Number(estatistica.textContent) - pecas[peca][nomeEstatistica]

        }

        localStorage.setItem(nomeEstatistica, estatistica.textContent)
    })
    
    //CONTADOR
    if (sinal == '+') {
        
        contador.value = parseInt(contador.value) + 1

    } else if (sinal == '-' && contador.value > 0) {
        
        contador.value = parseInt(contador.value) - 1

    }

    localStorage.setItem(peca, contador.value)

}

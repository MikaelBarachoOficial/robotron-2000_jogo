const imagemRobo = document.getElementById('imagemRobo')
const selecionaCorRobo = document.querySelector('[data-corSelecao]')
var corSalva = localStorage.getItem('corRobo')
if (corSalva != null) {
    selecionaCorRobo.value = corSalva
}

imagemRobo.src = `../img/robotron-cores/Robotron 2000 - ${selecionaCorRobo.value}/robotron.png`

selecionaCorRobo.addEventListener('change', evento => {
    imagemRobo.src = `../img/robotron-cores/Robotron 2000 - ${evento.target.value}/robotron.png`

    localStorage.setItem('corRobo', evento.target.value)
})
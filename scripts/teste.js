const soma = document.querySelector('#soma');
const subtrai = document.querySelector('#subtrair');

const ajuste = document.querySelector('.controle-ajuste');

const braco = document.querySelector('#bracos');

soma.addEventListener('click', () => { manipulaDados(soma) });

subtrai.addEventListener('click', () => { manipulaDados(subtrai) });

function manipulaDados (elemento) {

    if (elemento == soma) {
        braco.value = parseInt(braco.value) + 1;
    } else if (elemento == subtrai) {
        braco.value = parseInt(braco.value) - 1;
    }

}
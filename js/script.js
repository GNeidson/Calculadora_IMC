const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const calcularBotao = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');
const valorImcSpan = document.getElementById('valor-imc');
const classificacaoImcSpan = document.getElementById('classificacao-imc');

calcularBotao.addEventListener('click', calcularIMC);

function calcularIMC() {
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2); // Arredonda para 2 casas decimais

    valorImcSpan.textContent = imcFormatado;
    classificacaoImcSpan.textContent = obterClassificacaoIMC(imc);
    resultadoDiv.style.display = 'block'; // Exibe a div de resultado
}

function obterClassificacaoIMC(imc) {
    if (imc < 18.5) {
        classificacaoImcSpan.style.color = 'orange';
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacaoImcSpan.style.color = 'green';
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        classificacaoImcSpan.style.color = 'orange';
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        classificacaoImcSpan.style.color = 'red';
        return 'Obesidade grau I';
    } else if (imc >= 35 && imc < 40) {
        classificacaoImcSpan.style.color = 'red';
        return 'Obesidade grau II';
    } else {
        classificacaoImcSpan.style.color = 'red';
        return 'Obesidade grau III';
    }
}
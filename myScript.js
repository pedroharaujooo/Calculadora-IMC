// Função para calcular o IMC e verificar a categoria
function calcularImc() {
    // Obtém os valores inseridos nos campos de altura e peso
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    // Verifica se os campos não estão vazios e se são números válidos
    if (altura && peso && !isNaN(altura) && !isNaN(peso)) {
        // Converte a altura de cm para metros
        var alturaEmMetros = altura / 100;

        // Calcula o IMC
        var imc = peso / (alturaEmMetros * alturaEmMetros);

        // Define a faixa de IMC e a classificação
        var classificacao = '';
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Acima do peso';
        } else if (imc >= 30) {
            classificacao = 'Obesidade';
        }

        // Exibe o resultado com 2 casas decimais e a classificação
        alert('Seu IMC é: ' + imc.toFixed(2) + '\nClassificação: ' + classificacao);
    } else {
        // Exibe um alerta caso os campos não sejam preenchidos corretamente
        alert('Por favor, insira valores válidos para altura e peso.');
    }
}

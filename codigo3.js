function calcularCusto() {
    const qtdFuncionarios = parseInt(document.getElementById("qtdFuncionarios").value);
    const qtdDias = parseInt(document.getElementById("qtdDias").value);
    let custoPorDia;

    // Verifica se os valores de entrada são válidos
    if (isNaN(qtdFuncionarios) || isNaN(qtdDias) || qtdFuncionarios <= 0 || qtdDias <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    if (qtdFuncionarios >= 1 && qtdFuncionarios <= 49) {
        custoPorDia = 4.50;
    } else if (qtdFuncionarios >= 50 && qtdFuncionarios <= 99) {
        custoPorDia = 4.10;
    } else if (qtdFuncionarios >= 100 && qtdFuncionarios <= 149) {
        custoPorDia = 3.80;
    } else if (qtdFuncionarios >= 150) {
        custoPorDia = 3.60;
    } 

    // Cálculo do custo mensal
    const custoMensal = custoPorDia * qtdFuncionarios * qtdDias;
    document.getElementById("resultado").innerText = `O custo mensal de transporte fretado será: R$ ${custoMensal.toFixed(2)}`;
}

function limparCampos() {
    document.getElementById("qtdFuncionarios").value = "";
    document.getElementById("qtdDias").value = "";
    document.getElementById("resultado").innerText = "";
}

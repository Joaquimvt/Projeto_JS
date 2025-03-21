let salario = document.getElementById('salario');
let horasUteis = document.getElementById('horasUteis');
let horasFds = document.getElementById('horasFds');
let res = document.getElementById('res');

function calcular() {
    let salarioBruto = Number(salario.value);
    let horasExtrasNormais = Number(horasUteis.value);
    let horasExtrasFds = Number(horasFds.value);

    if (salarioBruto <= 0) {
        res.innerHTML = `<p style="color: yellow;">Erro: Insira um salário válido.</p>`;
        return;
    }

    let valorHora = salarioBruto / 200; // Descobrir o valor de cada hora trabalhada
    let totalHorasNormais = horasExtrasNormais * valorHora;
    let totalHorasFds = horasExtrasFds * (valorHora * 1.5); // 50% de acréscimo

    let totalExtra = totalHorasNormais + totalHorasFds;

    res.innerHTML += `<p>O total a receber pelas horas extras é <strong>R$ ${totalExtra.toFixed(2)}</strong></p>`;
}

function limpar() {
    res.innerHTML = "Aqui aparecerá o valor total das horas extras.";
}

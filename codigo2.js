// Seleciona os elementos do HTML
const salarioInput = document.querySelector("#salario");
const resultado = document.querySelector("#resultado");

// Função para calcular o aumento de salário
function calcularAumento() {
    const salario = Number(salarioInput.value);
    let aumento = 0;

    // Valida o salário inserido
    if (isNaN(salario) || salario < 0) {
        exibirMensagem("Informe um salário válido!", "red");
        return;
    }

    // Calcula o aumento baseado nas regras
    if (salario <= 1200) {
        aumento = salario * 0.16; // 16%
    } else if (salario <= 2100) {
        aumento = salario * 0.13; // 13%
    } else if (salario <= 3000) {
        aumento = salario * 0.10; // 10%
    } else {
        aumento = salario * 0.05; // 5%
    }

    // Calcula o novo salário
    const novoSalario = salario + aumento;
    exibirMensagem(`O novo salário após o aumento é: <strong>R$ ${novoSalario.toFixed(2)}</strong>`, "green");
}

// Função para exibir mensagens no resultado
function exibirMensagem(mensagem, cor) {
    resultado.innerHTML = `<p style="color: ${cor}; font-weight: bold;">${mensagem}</p>`;
}

// Função para limpar os campos e restaurar a mensagem inicial
function limpar() {
    salarioInput.value = ""; // Limpa o campo de salário
    resultado.innerHTML = "Aqui aparecerá o novo salário após o aumento."; // Restaura a mensagem inicial
}

// Adiciona evento aos botões
document.querySelector("#calcularBtn").addEventListener("click", calcularAumento);
document.querySelector("#limparBtn").addEventListener("click", limpar);

// Função para calcular a parcela mensal do empréstimo
function calcularParcela(valor, taxa, prazo) {
    const taxaMensal = taxa / 100; // Convertendo a taxa de porcentagem para decimal
    const parcela = (valor * taxaMensal) / (1 - Math.pow(1 + taxaMensal, -prazo));
    return parcela.toFixed(2); // Retorna a parcela formatada com duas casas decimais
}

// Evento para o formulário de simulação de empréstimos
document.getElementById('loan-simulation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos e substituindo vírgulas por pontos
    const valor = parseFloat(document.getElementById('valor').value.replace(',', '.'));
    const taxa = parseFloat(document.getElementById('taxa').value.replace(',', '.'));
    const prazo = parseInt(document.getElementById('prazo').value);

    // Validação dos valores
    if (isNaN(valor) || valor <= 0) {
        alert('Por favor, insira um valor válido para o empréstimo.');
        return;
    }
    if (isNaN(taxa) || taxa < 0) {
        alert('Por favor, insira uma taxa de juros válida (pode ser quebrada).');
        return;
    }
    if (isNaN(prazo) || prazo <= 0) {
        alert('Por favor, insira um prazo válido em meses.');
        return;
    }

    const parcelaMensal = calcularParcela(valor, taxa, prazo);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h3>Resultado da Simulação:</h3>
                               <p>Valor do Empréstimo: R$ ${valor.toFixed(2)}</p>
                               <p>Taxa de Juros: ${taxa}% ao mês</p>
                               <p>Prazo: ${prazo} meses</p>
                               <p>Parcela Mensal: R$ ${parcelaMensal}</p>`;
});

// Evento para o formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação simples
    if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Simulação de envio de dados
    const formData = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    };

    // Simulando um envio bem-sucedido
    setTimeout(() => {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        
        // Limpar o formulário após o envio
        document.getElementById('contact-form').reset();
    }, 1000); // Simula um atraso de 1 segundo para o envio
});
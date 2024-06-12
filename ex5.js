//Jo ken po
const prompt = require('prompt-sync')();
const opcoes = ['pedra', 'papel', 'tesoura'];

function escolhaComputador() {
    return opcoes[Math.floor(Math.random() * 3)];
}

function determinarVencedor(usuario, computador) {
    if (usuario === computador) {
        return 'Empate!';
    }
    if (
        (usuario === 'pedra' && computador === 'tesoura') ||
        (usuario === 'papel' && computador === 'pedra') ||
        (usuario === 'tesoura' && computador === 'papel')
    ) {
        return 'Você venceu!';
    }
    return 'Computador venceu!';
}

let escolhaUsuario = prompt("Escolha pedra, papel ou tesoura: ").toLowerCase();

while (!opcoes.includes(escolhaUsuario)) {
    console.log("Escolha inválida. Tente novamente.");
    escolhaUsuario = prompt("Escolha pedra, papel ou tesoura: ").toLowerCase();
}

let escolhaComp = escolhaComputador();

console.log(`Você escolheu: ${escolhaUsuario}`);
console.log(`O computador escolheu: ${escolhaComp}`);

let resultado = determinarVencedor(escolhaUsuario, escolhaComp);
console.log(resultado);

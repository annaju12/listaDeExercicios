//Calcular a redução de vida de um fumante
const prompt = require('prompt-sync')();

let cigarro = parseInt(prompt("Escreva quantos cigarros você fuma por dia: "));
let anos = parseInt(prompt("Escreva a quantos anos você fuma: "));

let anosEmDias = anos * 365;
let totalCigarrosFumados = anosEmDias * cigarro;
let minutosTirados = totalCigarrosFumados * 10;
let diasTirados = minutosTirados / 1440;

console.log(`Você já perdeu aproximadamente ${diasTirados.toFixed(2)} dias de vida.`);

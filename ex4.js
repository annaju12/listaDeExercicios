//Verificando se é possivel criar um triângulo
const prompt = require('prompt-sync')();
let segmento1 = parseFloat(prompt("Digite o tamanho do segmento de reta 1: "));
let segmento2 = parseFloat(prompt("Digite o tamanho do segmento de reta 2: "));
let segmento3 = parseFloat(prompt("Digite o tamanho do segmento de reta 3: "));

if (segmento1 + segmento2 > segmento3 && segmento1 + segmento3 > segmento2 && segmento2 + segmento3 > segmento1) {
    console.log("O seu triângulo existe.");
} else {
    console.log("O seu triângulo não existe.");
}

//Calculando o preço da passagem
const prompt = require('prompt-sync')();
let distancia = parseInt(prompt("Digite a distância que você deseja percorrer: "));

if ( distancia < 200){
    let passagem = distancia * 0.50;
    console.log(`O valor de sua passagem baseado nos KM é: R$${passagem}`)
} else {
    let passagem = distancia * 0.45;
    console.log(`O valor de sua passagem baseado nos KM é: R$${passagem}`)
}
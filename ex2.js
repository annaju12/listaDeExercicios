//Velociade de um carro
const prompt = require('prompt-sync')();
let velocidadeCarro = parseInt(prompt("Digite a velocidade do carro em km: "));

if (velocidadeCarro > 80){
    console.log("Você foi multado por excesso de velocidade.");
    let multa = velocidadeCarro - 80;
    multa *= 5;
    console.log(`Sua multa é de R$${multa}. `)
} else{
    console.log("Você está numa boa velocidade.");
}
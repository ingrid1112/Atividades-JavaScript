/* Faça um programa para calcular o valor de uma viagem.

voce tera 3 variaveis sendo elas
1- Preço do combustivel;
2- Gasto medio de combustivel do carro por KM;
3- Distancia em KM da viagem;

*/
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);
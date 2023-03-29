/* Faça um programa para calcular o valor de uma viagem

voce tera 5 variaveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que esta noi seu carro;
4 - Gasto medio de combustivel do carro por KM;
5 - Distancia em KM da viagem;

Imprima no console o valor que sera gatso para realizar esta viagem.*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoDeCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDeCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto);
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto);
}



/* O IMC- Indice de massa corporal e um criterio da organizaçao mundial da saude para dar uma indicaçao sobre a condiçao de peso de uma pessoa adulta.

Formula IMC
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e altura de um adulto mostre sua condiçao de acordo com a tabela abaixo.

IMC em adultos Condiçao:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

const peso = 200;
const altura = 1.70;
const IMC = peso / Math.pow(altura, 2);
console.log(IMC.toFixed(2));

if (IMC < 18.5) {
    console.log('Abaixo do peso');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do Peso');
} else if (IMC >= 25 && IMC < 40) {
    console.log('Obeso');
} else {
    console.log('Obsidade Grave');
}
/* Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e impriuma a sua media e sua classificaçao conforme a tabela abaixo.

Media = (nota 1 = nota 2 = nota = 3) / 3;
 
Classificaçao;
Media menor que 5, reprovaçao;
Media 5 e 7, recuperaçao;
Media acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 10;
const soma = nota1 + nota2 + nota3;
const media = soma / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovaçao');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperaçao');
} else {
    console.log('Passou de semestre');
}


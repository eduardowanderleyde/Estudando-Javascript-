document.write("simulando jogo de dados<br></br>");
let a = 0;
let g1 = 0;
let g2 = 0;
//repetindo por 10 rodadas//

const jogador1 = prompt("Escreva seu nome:");
const jogador2 = prompt("Escreva seu nome:");

//declarando jogadores//

//obtendo numero aleatorio menor de 6//

let numerojogador2 = Math.floor(1 + 7 * Math.random());

//pintando jogo//
document.write(`${jogador1} seu número é :${numerojogador1}<br>`);
document.write(`${jogador2} seu número é :${numerojogador2}<br><br>`);

//declaramos turnos//
let primeiroturno = "";
let segundoturno = "";

let primeiroturnogeral = "";
let segundoturnogeral = "";
let terceiroturnogeral = "";

//comparando numeros pra ver quem joga primeiro//
if (numerojogador1 > numerojogador2) {
  document.write(`${jogador1} joga primeiro<br>`);
  document.write(`${jogador2} joga segundo <br><br>`);
  primeiroturno = jogador1;
  segundoturno = jogador2;
} else {
  document.write(`${jogador1} joga segundo<br><br>`);
  document.write(`${jogador2} joga primeiro<br><br>`);
  primeiroturno = jogador2;
  segundoturno = jogador1;
}
//simulamos o lançamento NAO TA FUNCIONANDO//
confirm(`${primeiroturno} click ACEITAR para lançar o dado`);
confirm(`${segundoturno} click ACEITAR para lançar o dado`);

//obtermos os numeros aleatorios menores que 6//

let dadoprimeirojogador = Math.floor(Math.random() * 7);
let dadosegundojogador = Math.floor(Math.random() * 7);

//criamos variaveis para ver os postos//
let primeirolugar = "";
let segundolugar = "";

//compararmos os numeros para ver quem é o ganhador//
if (dadoprimeirojogador > dadosegundojogador) {
  primeirolugar = jogador1;
  segundolugar = jogador2;
  g1++;
} else {
  primeirolugar = jogador2;
  segundolugar = jogador1;
  g2++;
}

//pintarmos os resultados//
document.write(`1 lugar é o ${primeirolugar} <br>`);
document.write(`2 lugar é o ${segundolugar} <br><br>`);

//mostramos um alerta do ganhador//

if ((g1 = g2)) {
  alert(`DEU EMPATE`);
}
if (g1 > g2) {
  alert(`GANHADOR É` + primeirolugar);
} else {
  alert(`GANHADOR É` + segundolugar);
}

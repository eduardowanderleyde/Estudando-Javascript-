let count = 0;
let count2 = 0;
let arrayround = [];
let arrayround2 = [];

function jogar() {
  let resp = document.getElementById("resp");
  let randomNumber = Number(Math.floor(1 + 6 * Math.random()));
  let botao = document.querySelector("#primeiroBotao");
  let botao2 = document.querySelector("#segundoBotao");
  resp.innerHTML = randomNumber;
  botao2.removeAttribute("disabled");
  botao.setAttribute("disabled", "");
  arrayround.push(randomNumber);
  console.log(arrayround);
}

function jogar2() {
  let resp2 = document.getElementById("resp2");
  let randomNumber2 = Number(Math.floor(1 + 6 * Math.random()));
  let botao = document.querySelector("#primeiroBotao");
  let botao2 = document.querySelector("#segundoBotao");
  resp2.innerHTML = randomNumber2;
  botao2.setAttribute("disabled", "");
  botao.removeAttribute("disabled");
  arrayround2.push(randomNumber2);
  console.log(arrayround2);

  if (randomNumber > randomNumber2) {
    alert("Jogador 1 ganhou");
    count = count + 1;
  } else {
    alert("Jogador 2 ganhou");
    count2 = count2 + 1;
  }
}

function jogar3() {
  resp.innerHTML = Math.floor(0 * Math.random());
  resp2.innerHTML = Math.floor(0 * Math.random());
}

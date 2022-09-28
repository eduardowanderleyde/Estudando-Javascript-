//array de string

var shopping = ["bread", "milk", "cheese", "humus", "noodles"];
shopping;

//array de objeto//
let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

const alunos = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
];

alunos.push({
  nome: "João",
  idade: 35,
});
console.log(alunos[1].idade);

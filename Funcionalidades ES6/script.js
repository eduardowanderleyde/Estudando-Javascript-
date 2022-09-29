//filter,find,findIndex,reduce,some,every//

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

const alunos1 = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
  {
    nome: "Roberto",
    idade: 16,
  },
];
//filter retorna um novo array//
const alunosFiltrados = alunos1.filter((aluno1) => aluno1.idade >= 18);
console.table(alunosFiltrados); //

//find retorna um novo array//
const alunos = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
  {
    nome: "Roberto",
    idade: 16,
  },
];
const alunoRoberto = alunos.find((aluno) => (aluno.nome = "Roberto"));
console.table(alunoRoberto); //

//reduce é pra pegar algum tipo de inforamção de um array por exemplo
// e fazer algum cálculo//

const alunos = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
  {
    nome: "Roberto",
    idade: 16,
  },
];

const idades = alunos.reduce((acc, aluno) => {
  return acc + aluno.idade;
}, 0);
console.log(idades);

//some e every bom pra fazer validações//
const alunos = [
  {
    nome: "Pablo",
    idade: 25,
  },
  {
    nome: "José",
    idade: 19,
  },
  {
    nome: "Roberto",
    idade: 16,
  },
];

const acimaDeNove = alunos.some((alunos) => alunos.idade < 10);
const menorDeNove = alunos.every((alunos) => alunos.idade < 90);

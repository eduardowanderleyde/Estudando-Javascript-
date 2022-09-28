//laços de repeticoes//
//for , while, foreach,map//

for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i}x5=${i * 5}`);
  }
}

let x = 1;
while (x < 10) {
  console.log(`${x}x5=${x * 5}`);
  x++;
}

//foreach
console.log("=========");
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valores.forEach((value) => {
  console.log(`${value}x5=${value * 5}`);
});

//map
console.log("=========");
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores.map((value) => {
  return value * 5;
});
console.log(resultado);

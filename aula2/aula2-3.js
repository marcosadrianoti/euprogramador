const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Você está gostando do Node.js? ', resposta => {
  console.log(`Sua resposta foi: ${resposta}`);

  rl.close();
});
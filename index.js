const readlineSync = require("readline-sync")

let matriz = [];
let opcao = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
        matriz[i][j] = readlineSync.questionInt("Digite um numero: ");
    }
}

console.log("\nMatriz:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i]);
}

while (opcao !== 4) {

    console.log("\n1 - Somar linha 1");
    console.log("2 - Multiplicar diagonal");
    console.log("3 - Contar pares");
    console.log("4 - Sair");

    opcao = readlineSync.questionInt("Escolha: ");

    switch (opcao) {

        case 1:
            let soma = 0;
            for (let j = 0; j < 3; j++) {
                soma = soma + matriz[0][j];
            }
            console.log("Soma da linha 1:", soma);
            break;

        case 2:
            let mult = 1;
            for (let i = 0; i < 3; i++) {
                mult = mult * matriz[i][i];
            }
            console.log("Multiplicacao da diagonal:", mult);
            break;

        case 3:
            let pares = 0;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (matriz[i][j] % 2 === 0) {
                        pares = pares + 1;
                    }
                }
            }
            console.log("Total de pares:", pares);
            break;

        case 4:
            console.log("Encerrado");
            break;

        default:
            console.log("Opcao invalida");
    }
}
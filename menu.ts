// Importação do Pacote
import ler = require("readline-sync");
import { colors } from "./src/util/colors";

export function main() {
    let opcao: number;

    while (true) {
        console.log("\x1b[1;34m▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲\x1b[0m\n");
        console.log("\x1b[1;34m▲▲▲ Banco Tridimensional ▲▲▲\x1b[0m");
        console.log("\n\x1b[1;34m▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲\x1b[0m\n");
        console.log("\x1b[1;34m▶ 1 - Criar uma conta");
        console.log("▶ 2 - Listar todas as contas");
        console.log("▶ 3 - Buscar conta por número");
        console.log("▶ 4 - Atualizar dados de conta");
        console.log("▶ 5 - Apagar uma conta");
        console.log("▶ 6 - Sacar");
        console.log("▶ 7 - Depositar");
        console.log("▶ 8 - Transferir valores entre contas");
        console.log("▶ 9 - Sair\x1b[0m");
        console.log("\n\x1b[1;34m▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲\x1b[0m\n");

        opcao = ler.questionInt("\x1b[1;34mDigite a opcao desejada:\x1b[0m ");

        if (opcao === 9) {
            console.log("\x1b[1;34mSaindo do Banco Tridimensional. Até logo!\x1b[0m");
            break;
        }

        switch (opcao) {
            case 1:
                console.log("\x1b[1;34m▶ Criar conta (em desenvolvimento)\x1b[0m");
                break;
            case 2:
                console.log("\x1b[1;34m▶ Listar contas (em desenvolvimento)\x1b[0m");
                break;
            case 3:
                console.log("\x1b[1;34m▶ Buscar conta (em desenvolvimento)\x1b[0m");
                break;
            case 4:
                console.log("\x1b[1;34m▶ Atualizar conta (em desenvolvimento)\x1b[0m");
                break;
            case 5:
                console.log("\x1b[1;34m▶ Apagar conta (em desenvolvimento)\x1b[0m");
                break;
            case 6:
                console.log("\x1b[1;34m▶ Sacar (em desenvolvimento)\x1b[0m");
                break;
            case 7:
                console.log("\x1b[1;34m▶ Depositar (em desenvolvimento)\x1b[0m");
                break;
            case 8:
                console.log("\x1b[1;34m-> Transferir valores (em desenvolvimento)\x1b[0m");
                break;
            default:
                console.log("\x1b[1;34m⚠️  Opção inválida!\x1b[0m");
                break;
        }
    }
}

main();

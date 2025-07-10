// Importação do Pacote
import ler = require("readline-sync");
import { colors } from "./src/util/colors";
import { Conta } from "./src/model/conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";



// Função principal que exibe o menu do sistema bancário e executa operações básicas de teste.
export function main() {
    let opcao: number;

    //Criação de uma Conta
    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);

    // Demonstração de métodos da conta para visualização e operações básicas
    conta.visualizar();         // Mostra dados iniciais da conta
    conta.sacar(10500);         // Tenta sacar valor maior que o saldo
    conta.visualizar();         // Mostra dados após tentativa de saque
    conta.depositar(5000);       // Realiza depósito
    conta.visualizar();         // Mostra dados após depósito


    //Criação de uma Conta
    const contaCorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 10000);

    // Demonstração de métodos da conta para visualização e operações básicas
    conta.visualizar();         // Mostra dados iniciais da conta
    conta.sacar(10500);         // Tenta sacar valor maior que o saldo
    conta.visualizar();         // Mostra dados após tentativa de saque
    conta.depositar(5000);       // Realiza depósito
    conta.visualizar();         // Mostra dados após depósito


        //Criação de uma Conta
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 10000, 10);

    // Demonstração de métodos da conta para visualização e operações básicas
    conta.visualizar();         // Mostra dados iniciais da conta
    conta.sacar(10500);         // Tenta sacar valor maior que o saldo
    conta.visualizar();         // Mostra dados após tentativa de saque
    conta.depositar(5000);       // Realiza depósito
    conta.visualizar();         // Mostra dados após depósito


    

    
    while (true) {

        // Cabeçalho visual do sistema com estilização ANSI (azul forte)
        console.log("\x1b[1;34m▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲\x1b[0m\n");
        console.log("\x1b[1;34m▲▲▲ Banco Tridimensional ▲▲▲\x1b[0m");
        console.log("\n\x1b[1;34m▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲\x1b[0m\n");

        // Exibição das opções disponíveis para o usuário
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

        // Entrada do usuário para seleção da opção
        opcao = ler.questionInt("\x1b[1;34mDigite a opcao desejada:\x1b[0m ");

        // Condição de parada: se a opção for 9, finaliza o programa
        if (opcao === 9) {
            console.log("\x1b[1;34mSaindo do Banco Tridimensional. Até logo!\x1b[0m");
            break;
        }

        // Estrutura switch para tratar cada uma das opções do menu
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

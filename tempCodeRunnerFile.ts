// Importação do Pacote
import ler = require("readline-sync");

// Centraliza texto no terminal
function centralizarTexto(texto: string): string {
    const larguraTerminal = process.stdout.columns || 80;
    const espacos = Math.floor((larguraTerminal - texto.length) / 2);
    return " ".repeat(Math.max(0, espacos)) + texto;
}

// Mostra o menu principal
function exibirMenu(): void {
    console.log("▲".repeat(50));
    console.log(centralizarTexto("▲ Banco Tridimensional ▲"));
    console.log("▲".repeat(50));
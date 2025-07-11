export abstract class Conta{
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;
    

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number){
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

      public getNumero_1(): number {
        return this._numero;
    }
    public setNumero_1(value: number) {
        this._numero = value;
    }

    public getAgencia_1(): number {
        return this._agencia;
    }
    public setAgencia_1(value: number) {
        this._agencia = value;
    }

      public getTipo_1(): number {
        return this._tipo;
    }
    public setTipo_1(value: number) {
        this._tipo = value;
    }

    public getTitular_1(): string {
        return this._titular;
    }
    public setTitular_1(value: string) {
        this._titular = value;
    }

    public getSaldo_1(): number {
        return this._saldo;
    }
    public setSaldo_1(value: number) {
        this._saldo = value;
    }

    public sacar(valor: number): boolean{
        if (this._saldo < valor){
            console.log("\nSaldo insuficiente!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor: number): void{
        this._saldo = this._saldo + valor;
        }

    public visualizar(): void{
        let tipo: string = "";

        switch(this._tipo){
            case 1:
                tipo = "Conta corrente";
                break;
            case 2:
                tipo = "Conta Poupanca";
                break;
        }

        // Cabeçalho visual do sistema com estilização ANSI (azul forte)
        console.log("\x1b[1;34m▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲\x1b[0m\n");
        console.log("\x1b[1;34m▲▲▲ Dados da Conta ▲▲▲\x1b[0m");
        console.log("\n\x1b[1;34m▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲\x1b[0m\n");

        // Exibição das opções disponíveis para o usuário
        console.log("\x1b[1;34m▶ Numero da Conta:" + this._numero);
        console.log("▶ Agencia: " + this._agencia);
        console.log("▶ Tipo da Conta: " + tipo);
        console.log("▶ Titular: " + this._titular);
        console.log("▶ Saldo: " + this._saldo);
        console.log("\n\x1b[1;34m▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲\x1b[0m\n");

}
}
import { Conta } from "./conta";

export class ContaCorrente extends Conta {

    private _limite: number;
    
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }

    public getLimite(): number {
        return this._limite;
    }

    public setLimite(value: number): void {
        this._limite = value;
    }

    public sacar(valor: number): boolean {
        if ((this.getSaldo_1() + this._limite) < valor) {
            console.log("\nSaldo Insuficiente!");
            return false;
        }

        this.setSaldo_1(this.getSaldo_1() - valor);
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite: ${this._limite.toFixed(2)}`);
    }
}

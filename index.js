class Cliente {
    Nome;
    CPF;
}

class ContaCorrente {
    Agencia;
    _Saldo = 0;
    // #Saldo = 0 ---- Deixar a variável privada

    sacar(valor) {
        if (this._Saldo >= valor) {
            this._Saldo -= valor;
            return valor;
        }
        return
    }
    depositar(valor) {
        if (valor > 0) {
            this._Saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
const conta1 = new ContaCorrente();
cliente1.Nome = "Rodrigo";
cliente1.CPF = 35672009840;
conta1.Agencia = 1001;

conta1.depositar(100);
conta1.depositar(100);
conta1.depositar(100);
const valorSacado = conta1.sacar(50);

console.log(valorSacado);
console.log(conta1)


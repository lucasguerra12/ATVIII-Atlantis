import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";

export default class ExclusaoCliente extends Processo {
    constructor() {
        super();
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a exclusão de cliente...');

        let clientes = Armazem.InstanciaUnica.Clientes;

        if (clientes.length === 0) {
            console.log('Não há clientes para excluir.');
            this.entrada.receberNumero('Digite qualquer tecla para voltar...');
            return;
        }

        console.log('--- Selecione o Cliente para EXCLUIR ---');
        clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`);
        });

        let indexCliente = this.entrada.receberNumero('Digite o número do cliente a excluir: ');

        if (indexCliente >= 0 && indexCliente < clientes.length) {
            // Remove 1 elemento na posição indexCliente
            let clienteRemovido = clientes.splice(indexCliente, 1); 
            console.log(`Cliente ${clienteRemovido[0].Nome} removido com sucesso!`);
        } else {
            console.log('Índice inválido. Ninguém foi removido.');
        }
    }
}
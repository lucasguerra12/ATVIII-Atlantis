import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";
import Cliente from "../modelos/cliente.js";
import Acomodacao from "../modelos/acomodacao.js";
import Hospedagem from "../modelos/hospedagem.js";

export default class CadastroHospedagem extends Processo {
    private clientes: Cliente[];
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando processo de hospedagem...');

        if (this.clientes.length === 0 || this.acomodacoes.length === 0) {
            console.log('Desculpe, não há clientes ou acomodações suficientes para realizar uma hospedagem.');
            return;
        }

        console.log('--- Selecione o Cliente ---');
        this.clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`);
        });
        let indexCliente = this.entrada.receberNumero('Digite o número do cliente:');
        
        console.log('--- Selecione a Acomodação ---');
        this.acomodacoes.forEach((acomodacao, index) => {
            console.log(`${index} - ${acomodacao.NomeAcomadacao}`);
        });
        let indexAcomodacao = this.entrada.receberNumero('Digite o número da acomodação:');

        if (this.clientes[indexCliente] && this.acomodacoes[indexAcomodacao]) {
            let hospedagem = new Hospedagem(
                this.clientes[indexCliente],
                this.acomodacoes[indexAcomodacao]
            );
            
            Armazem.InstanciaUnica.Hospedagens.push(hospedagem);
            console.log('Hospedagem realizada com sucesso!');
        } else {
            console.log('Opção inválida!');
        }
    }
}
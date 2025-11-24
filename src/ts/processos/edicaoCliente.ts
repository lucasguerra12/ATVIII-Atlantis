import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";
import Cliente from "../modelos/cliente.js";

export default class EdicaoCliente extends Processo {
    constructor() {
        super();
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a edição de cliente...');

        let clientes = Armazem.InstanciaUnica.Clientes;

        // 1. Verificação de segurança
        if (clientes.length === 0) {
            console.log('Não há clientes cadastrados para editar.');
            this.entrada.receberNumero('Digite qualquer tecla para voltar...');
            return;
        }

        // 2. Listagem simples para escolha
        console.log('--- Lista de Clientes ---');
        clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`);
        });

        // 3. Seleção do Cliente
        let indexCliente = this.entrada.receberNumero('Digite o número do cliente que deseja editar: ');

        if (indexCliente < 0 || indexCliente >= clientes.length) {
            console.log('Cliente não encontrado!');
            return;
        }

        let clienteSelecionado = clientes[indexCliente];

        // 4. Menu de campos para editar
        console.log(`\nEditando: ${clienteSelecionado.Nome}`);
        console.log('1 - Alterar Nome');
        console.log('2 - Alterar Nome Social');
        console.log('3 - Alterar Data de Nascimento');
        console.log('0 - Cancelar');

        let opcao = this.entrada.receberNumero('Qual informação deseja alterar?');

        switch (opcao) {
            case 1:
                let novoNome = this.entrada.receberTexto('Digite o novo nome: ');
                clienteSelecionado.Nome = novoNome;
                console.log('Nome atualizado com sucesso!');
                break;
            case 2:
                let novoNomeSocial = this.entrada.receberTexto('Digite o novo nome social: ');
                clienteSelecionado.NomeSocial = novoNomeSocial;
                console.log('Nome social atualizado com sucesso!');
                break;
            case 3:
                let dataInput = this.entrada.receberData('Digite a nova data de nascimento (dd/mm/aaaa): ');
                clienteSelecionado.DataNascimento = dataInput;
                console.log('Data de nascimento atualizada com sucesso!');
                break;
            case 0:
                console.log('Edição cancelada.');
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}
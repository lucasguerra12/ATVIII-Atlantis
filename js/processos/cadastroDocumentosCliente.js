import Processo from "../abstracoes/processo.js";
import MenuTipoDocumento from "../menu/menuTipoDocumento.js";
import CadastroCpf from "./cadastroCpf.js";
import CadastroRg from "./cadastroRg.js";
import CadastroPassaporte from "./cadastroPassaporte.js";
export default class CadastroDocumentosCliente extends Processo {
    cliente;
    constructor(cliente) {
        super();
        this.cliente = cliente;
        this.menu = new MenuTipoDocumento();
        this.execucao = true;
    }
    processar() {
        console.log('Iniciando o cadastro de documentos...');
        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero('Qual opção desejada?');
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastroCpf(this.cliente);
                    this.processo.processar();
                    break;
                case 2:
                    this.processo = new CadastroRg(this.cliente);
                    this.processo.processar();
                    break;
                case 3:
                    this.processo = new CadastroPassaporte(this.cliente);
                    this.processo.processar();
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Opção não entendida :(');
            }
        }
    }
}

import Processo from "../abstracoes/processo.js";
import { TipoDocumento } from "../enumeracoes/TipoDocumento.js";
import Documento from "../modelos/documento.js";
export default class CadastroPassaporte extends Processo {
    cliente;
    constructor(cliente) {
        super();
        this.cliente = cliente;
    }
    processar() {
        let numero = this.entrada.receberTexto('Qual o número do Passaporte?');
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do passaporte?');
        let passaporte = new Documento(numero, TipoDocumento.Passaporte, dataExpedicao);
        this.cliente.Documentos.push(passaporte);
    }
}

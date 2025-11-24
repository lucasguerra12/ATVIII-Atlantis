import Processo from "../abstracoes/processo.js";
import { TipoDocumento } from "../enumeracoes/TipoDocumento.js";
import Cliente from "../modelos/cliente.js";
import Documento from "../modelos/documento.js";

export default class CadastroCpf extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = this.entrada.receberTexto('Qual o número do CPF?')
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?')
        let cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao)
        this.cliente.Documentos.push(cpf)
    }
}
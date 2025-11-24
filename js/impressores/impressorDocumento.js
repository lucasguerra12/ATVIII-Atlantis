export default class ImpressorDocumento {
    documento;
    constructor(documento) {
        this.documento = documento;
    }
    imprimir() {
        let impressao = `| Documento:\n`
            + `| Tipo: ${this.documento.Tipo}\n`
            + `| Data expedição: ${this.documento.DataExpedicao.toLocaleDateString()}\n`
            + `| Número: ${this.documento.Numero}`;
        return impressao;
    }
}

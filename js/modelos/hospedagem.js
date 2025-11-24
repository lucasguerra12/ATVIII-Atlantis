export default class Hospedagem {
    cliente;
    acomodacao;
    constructor(cliente, acomodacao) {
        this.cliente = cliente;
        this.acomodacao = acomodacao;
    }
    get Cliente() { return this.cliente; }
    get Acomodacao() { return this.acomodacao; }
}

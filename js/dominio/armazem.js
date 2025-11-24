export default class Armazem {
    static instanciaUnica = new Armazem();
    clientes = [];
    acomodacoes = [];
    hospedagens = [];
    constructor() { }
    static get InstanciaUnica() {
        return this.instanciaUnica;
    }
    get Clientes() {
        return this.clientes;
    }
    get Acomodacoes() {
        return this.acomodacoes;
    }
    get Hospedagens() {
        return this.hospedagens;
    }
}

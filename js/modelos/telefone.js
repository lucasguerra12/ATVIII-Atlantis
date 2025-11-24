export default class Telefone {
    ddd;
    numero;
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    get Ddd() { return this.ddd; }
    get Numero() { return this.numero; }
}

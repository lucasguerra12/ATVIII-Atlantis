import Acomodacao from "./acomodacao.js";
import Cliente from "./cliente.js";

export default class Hospedagem {
    private cliente: Cliente;
    private acomodacao: Acomodacao;
    
    constructor(cliente: Cliente, acomodacao: Acomodacao) {
        this.cliente = cliente;
        this.acomodacao = acomodacao;
    }

    public get Cliente() { return this.cliente }
    public get Acomodacao() { return this.acomodacao }
}
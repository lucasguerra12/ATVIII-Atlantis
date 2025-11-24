export default class Cliente {
    nome;
    nomeSocial;
    dataNascimento;
    dataCadastro;
    telefones = [];
    endereco;
    documentos = [];
    dependentes = [];
    titular;
    constructor(nome, nomeSocial, dataNascimento) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = new Date();
    }
    get Nome() { return this.nome; }
    get NomeSocial() { return this.nomeSocial; }
    get DataNascimento() { return this.dataNascimento; }
    get DataCadastro() { return this.dataCadastro; }
    get Telefones() { return this.telefones; }
    get Endereco() { return this.endereco; }
    get Documentos() { return this.documentos; }
    get Dependentes() { return this.dependentes; }
    get Titular() { return this.titular; }
    set Endereco(endereco) { this.endereco = endereco; }
}

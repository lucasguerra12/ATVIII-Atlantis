import Processo from "../abstracoes/processo.js";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples.js";
import Armazem from "../dominio/armazem.js";
import Acomodacao from "../modelos/acomodacao.js";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorSolteiroSimples()
        this.acomodacoes.push(diretor.construir())
    }
}
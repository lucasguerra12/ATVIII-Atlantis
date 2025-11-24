import Processo from "../abstracoes/processo.js";
import DiretorCasalSimples from "../diretores/diretorCasalSimples.js";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais.js";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples.js";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper.js";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais.js";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples.js";
import Armazem from "../dominio/armazem.js";
import MenuTipoAcomodacao from "../menu/menuTipoAcomodacao.js";
export default class CadastroAcomodacoes extends Processo {
    acomodacoes;
    constructor() {
        super();
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
        this.menu = new MenuTipoAcomodacao();
    }
    processar() {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        let diretor;
        switch (this.opcao) {
            case 1:
                diretor = new DiretorSolteiroSimples();
                this.acomodacoes.push(diretor.construir());
                console.log("Acomodação Solteiro Simples criada!");
                break;
            case 2:
                diretor = new DiretorCasalSimples();
                this.acomodacoes.push(diretor.construir());
                console.log("Acomodação Casal Simples criada!");
                break;
            case 3:
                diretor = new DiretorFamiliaSimples();
                this.acomodacoes.push(diretor.construir());
                console.log("Acomodação Família Simples criada!");
                break;
            case 4:
                diretor = new DiretorFamiliaMais();
                this.acomodacoes.push(diretor.construir());
                console.log("Acomodação Família Mais criada!");
                break;
            case 5:
                diretor = new DiretorFamiliaSuper();
                this.acomodacoes.push(diretor.construir());
                console.log("Acomodação Família Super criada!");
                break;
            case 6:
                diretor = new DiretorSolteiroMais();
                this.acomodacoes.push(diretor.construir());
                console.log("Acomodação Solteiro Mais criada!");
                break;
            case 0:
                console.log("Voltando...");
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}

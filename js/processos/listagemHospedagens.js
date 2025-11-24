import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";
export default class ListagemHospedagens extends Processo {
    constructor() {
        super();
    }
    processar() {
        console.clear();
        console.log('Iniciando listagem de hospedagens...');
        let hospedagens = Armazem.InstanciaUnica.Hospedagens;
        if (hospedagens.length === 0) {
            console.log('Não há hospedagens ativas no momento.');
        }
        else {
            console.log('----------------------------------------------------------------');
            hospedagens.forEach((hospedagem, index) => {
                console.log(`\n[Hospedagem ${index + 1}]`);
                console.log(`Cliente: ${hospedagem.Cliente.Nome}`);
                console.log(`Acomodação: ${hospedagem.Acomodacao.NomeAcomadacao}`);
                console.log('----------------------------------------------------------------');
            });
        }
        this.entrada.receberNumero('Pressione qualquer tecla e Enter para voltar...');
    }
}

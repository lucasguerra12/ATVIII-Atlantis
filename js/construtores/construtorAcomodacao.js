import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao.js";
import Acomodacao from "../modelos/acomodacao.js";
export default class ConstrutorAcomodacao {
    nomeAcomodacao = NomeAcomadacao.SolteiroSimples;
    camaSolteiro = 0;
    camaCasal = 0;
    suite = 0;
    climatizacao = false;
    garagem = 0;
    set NomeAcomodacao(nomeAcomodacao) { this.nomeAcomodacao = nomeAcomodacao; }
    set CamaSolteiro(camaSolteiro) { this.camaSolteiro = camaSolteiro; }
    set CamaCasal(camaCasal) { this.camaCasal = camaCasal; }
    set Suite(suite) { this.suite = suite; }
    set Climatizacao(climatizacao) { this.climatizacao = climatizacao; }
    set Garagem(garagem) { this.garagem = garagem; }
    construir() {
        let acomodacao = new Acomodacao(this.nomeAcomodacao, this.camaSolteiro, this.camaCasal, this.suite, this.climatizacao, this.garagem);
        return acomodacao;
    }
}

import Entrada from "../io/entrada.js";
export default class Processo {
    opcao;
    menu;
    entrada = new Entrada();
    processo;
    execucao;
    get Execucao() {
        return this.execucao;
    }
}

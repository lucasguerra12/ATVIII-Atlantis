import Principal from "../processos/principal.js";
console.clear();
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`);
let processo;
let execucao = true;
while (execucao) {
    processo = new Principal();
    processo.processar();
    execucao = processo.Execucao;
}

import Menu from "../interfaces/menu.js";

export default class MenuTipoAcomodacao implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de acomodação que deseja cadastrar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Solteiro Simples`)
        console.log(`| 2 - Casal Simples`)
        console.log(`| 3 - Família Simples`)
        console.log(`| 4 - Família Mais`)
        console.log(`| 5 - Família Super`)
        console.log(`| 6 - Solteiro Mais`)
        console.log(`----------------------`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}
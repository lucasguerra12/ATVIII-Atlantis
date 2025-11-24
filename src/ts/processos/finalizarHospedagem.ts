import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";

export default class FinalizarHospedagem extends Processo {
    constructor() {
        super()
    }

    processar(): void {
        console.clear()
        console.log('Iniciando processo de Check-out (Saída)...')

        let hospedagens = Armazem.InstanciaUnica.Hospedagens

        if (hospedagens.length === 0) {
            console.log('Não há hospedagens ativas no momento.')
            this.entrada.receberNumero('Pressione Enter para voltar...')
            return
        }

        console.log('--- Hospedagens Ativas ---')
        hospedagens.forEach((hospedagem, index) => {
            console.log(`${index} - Cliente: ${hospedagem.Cliente.Nome} | Quarto: ${hospedagem.Acomodacao.NomeAcomadacao}`)
        })

        let indexHospedagem = this.entrada.receberNumero('Digite o número da hospedagem para encerrar: ')

        if (indexHospedagem >= 0 && indexHospedagem < hospedagens.length) {
            let hospedagemRemovida = hospedagens.splice(indexHospedagem, 1) // Remove da lista
            console.log(`Check-out realizado com sucesso!`)
            console.log(`O cliente ${hospedagemRemovida[0].Cliente.Nome} liberou a acomodação.`)
        } else {
            console.log('Opção inválida!')
        }
    }
}
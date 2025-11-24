# Atlantis - Sistema de Gestão (ATVIII) 🏨

O **Atlantis (Módulo de Hospedagem)** é a terceira evolução do sistema de gestão, focado na implementação de acomodações e controle de hospedagem.

Este projeto tem como objetivo principal a aplicação prática do padrão de projeto **Builder** (Construtor) para gerir a criação de objetos complexos (diferentes tipos de quartos com várias configurações).

## 🎯 Funcionalidades Implementadas

* **Gestão de Acomodações (Padrão Builder):**
    * Criação de quartos pré-configurados através de **Diretores**:
        * Solteiro Simples / Solteiro Mais
        * Casal Simples
        * Família Simples / Mais / Super
    * Listagem detalhada das características de cada acomodação.
* **Gestão de Clientes:**
    * Cadastro de Titulares e Dependentes.
    * Gestão de documentos e endereços.
* **Controle de Hospedagem:**
    * Sistema de "Check-in" que vincula um Cliente existente a uma Acomodação disponível.

## 🏗️ Padrões de Projeto (Design Patterns)

### 1. Builder (O Foco da Atividade)
Utilizado para resolver o problema da criação de quartos com múltiplas configurações (número de camas, garagem, climatização, suítes).
* **Construtor (`ConstrutorAcomodacao`):** Define os passos genéricos para criar um quarto.
* **Diretores (`DiretorCasalSimples`, `DiretorFamiliaSuper`, etc.):** Definem a "receita" específica para cada tipo de quarto, orientando o construtor.
* **Produto (`Acomodacao`):** O objeto final complexo gerado.

### 2. Singleton
Utilizado na classe `Armazem` para garantir que todo o sistema partilha a mesma lista de clientes e hospedagens na memória.

### 3. Strategy / Command
A estrutura de `Processos` e `Menus` permite encapsular cada ação do sistema, facilitando a manutenção e a escalabilidade.

## 🛠️ Tecnologias

* **Linguagem:** TypeScript (Configurado com ES Modules/NodeNext).
* **Runtime:** Node.js.
* **Bibliotecas:** `prompt-sync` para interação via terminal.

## 🚀 Como Rodar

1.  **Instalar dependências:**
    ```bash
    npm install
    ```

2.  **Compilar o TypeScript:**
    ```bash
    npm run build
    ```

3.  **Executar o Sistema:**
    ```bash
    npm start
    ```

## 📂 Estrutura do Projeto

* `/src/ts/abstracoes`: Classes base (Diretor, Processo).
* `/src/ts/construtores`: Implementação do Builder.
* `/src/ts/diretores`: "Receitas" dos quartos.
* `/src/ts/dominio`: Armazém de dados (Singleton).
* `/src/ts/impressores`: Lógica de exibição no terminal (SRP).
* `/src/ts/modelos`: Classes de domínio (Cliente, Acomodacao, Hospedagem).
* `/src/ts/processos`: Lógica de negócio (Cadastros, Listagens).

---
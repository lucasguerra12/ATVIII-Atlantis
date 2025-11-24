# 🌊 Atlantis Water Park - Sistema de Gerenciamento

> **Atividade Prática VIII (ATVIII)**
> **Disciplina:** Laboratório de Engenharia de Software
> **Professor:** Dr. Eng. Gerson Penha

## 📖 Sobre o Projeto

O **Atlantis Water Park** é um sistema de software desenvolvido em **TypeScript** para gerenciar as operações de um resort/parque aquático. O objetivo principal desta etapa foi transformar o software em um Produto Mínimo Viável (MVP), implementando o cadastro completo de clientes, a construção de acomodações utilizando padrões de projeto e o controle efetivo de hospedagens.

## 🚀 Funcionalidades Implementadas

O sistema conta agora com três módulos principais totalmente funcionais:

### 1. Gestão de Clientes (CRUD Completo)
Gerenciamento total da base de clientes do resort.
- **Cadastrar:** Registro de novos clientes titulares e dependentes (com documentos e endereço).
- **Listar:** Visualização de todos os clientes cadastrados.
- **Editar:** Atualização de dados cadastrais (Nome, Nome Social, Data de Nascimento).
- **Excluir:** Remoção de clientes da base de dados.

### 2. Gestão de Acomodações (Padrão Builder)
Criação flexível de quartos utilizando o padrão de projeto **Builder**.
- **Criação de Acomodações:** O sistema permite instanciar diferentes tipos de quartos pré-definidos:
  - Solteiro Simples / Mais
  - Casal Simples
  - Família Simples / Mais / Super
- **Listagem:** Visualização detalhada das acomodações disponíveis e suas características (ar-condicionado, suíte, garagens).

### 3. Controle de Hospedagem (Core Business)
O coração do sistema, vinculando clientes a quartos.
- **Check-in (Entrada):** Registra a entrada de um cliente em uma acomodação específica.
- **Listagem de Hospedagens:** Mostra quem está hospedado atualmente e em qual quarto.
- **Check-out (Saída):** [NOVO] Finaliza a estadia, liberando o cliente e a acomodação da lista de ativos.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Padrões de Projeto:**
  - **Builder:** Utilizado nas classes "Diretor" para a construção complexa de acomodações.
  - **Strategy/Template Method:** Utilizado na abstração dos "Processos" do menu.

---

## 📂 Estrutura do Projeto

```

src/
├── ts/
│   ├── abstracoes/      \# Classes base (Processo, Diretor)
│   ├── app/             \# Ponto de entrada
│   ├── construtores/    \# Builders concretos
│   ├── diretores/       \# Diretores de acomodação (Casal, Familia, etc.)
│   ├── dominio/         \# Armazém de dados (Singleton)
│   ├── enumeracoes/     \# Enums (Tipos de documentos, Nomes de quartos)
│   ├── impressores/     \# Logica de apresentação
│   ├── interfaces/      \# Contratos do sistema
│   ├── io/              \# Entrada de dados
│   ├── menu/            \# Menus do console
│   ├── modelos/         \# Entidades (Cliente, Acomodacao, Hospedagem)
│   └── processos/       \# Lógica de negócio (Cadastros, Edição, Listagens)

````

---

## ▶️ Como Executar

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.

### Passo a Passo

1. **Instale as dependências:**
   ```bash
   npm install
````

2.  **Compile o TypeScript:**

    ```bash
    npx tsc
    ```

    *(Isso gerará os arquivos JavaScript na pasta `js/`)*

3.  **Execute o Sistema:**

    ```bash
    node js/app/app.js
    ```

-----

## 📋 Roteiro de Teste (Sugestão)

Para verificar todas as funcionalidades, siga este fluxo no menu principal:

1.  **Cadastrar um Cliente:** Opção `1` (Cliente Titular).
2.  **Criar Acomodação:** Opção `6` (Escolha um tipo, ex: Família Super).
3.  **Fazer Check-in:** Opção `7` (Vincule o cliente criado à acomodação).
4.  **Listar Hospedagens:** Opção `8` (Verifique se o registro aparece).
5.  **Editar Cliente:** Opção `2` (Altere o nome do cliente).
6.  **Fazer Check-out:** Opção `9` (Encerre a hospedagem).
7.  **Excluir Cliente:** Opção `4` (Remova o cliente do sistema).

-----

**Desenvolvido por:** Lucas Guerra

```
```

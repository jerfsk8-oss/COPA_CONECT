# COPA_CONNECT

## Integrante

* Antonio Jefferson Santos Sousa

* Matricula: 202309055104


## Descrição do Projeto

O COPA_CONNECT é um aplicativo desenvolvido em React Native com o objetivo de conectar moradores de Copacabana a pequenos empreendedores e profissionais autônomos da região.

A plataforma permite que profissionais divulguem seus serviços de forma simples e acessível, facilitando a busca e o contato por parte dos moradores do bairro.

## Problema Social

Muitos pequenos empreendedores possuem dificuldades para divulgar seus serviços localmente e alcançar novos clientes.

O COPA_CONNECT busca fortalecer a economia local, aproximando moradores de profissionais independentes como massoterapeutas, eletricistas, barbeiros, professores particulares, técnicos de informática e outros prestadores de serviços.

## Tecnologias Utilizadas

* React Native
* Expo
* TypeScript
* Expo Router
* SQLite (expo-sqlite)
* Git e GitHub

## Funcionalidades

### Cadastro de Serviços

Permite cadastrar profissionais e serviços locais.

### Consulta de Serviços

Exibe todos os serviços cadastrados.

### Edição de Serviços

Permite atualizar informações dos profissionais cadastrados.

### Exclusão de Serviços

Permite remover serviços da base de dados.

### Integração com WhatsApp

Possibilita entrar em contato diretamente com o profissional através do WhatsApp.

### Persistência Local

Os dados são armazenados localmente utilizando SQLite, permitindo funcionamento offline.

## Estrutura do Projeto

/app

* index.tsx
* cadastro.tsx
* servicos.tsx

/database

* db.ts

## Como Executar o Projeto

### Clonar o repositório

```bash
git clone https://github.com/jerfsk8-oss/COPA_CONECT.git
```

### Instalar dependências

```bash
npm install
```

### Executar o projeto

```bash
npx expo start
```

### Executar limpando cache (se necessário)

```bash
npx expo start --clear
```

## Demonstração

Fluxo principal do aplicativo:

1. Cadastrar serviço.
2. Visualizar serviços cadastrados.
3. Editar informações.
4. Excluir registros.
5. Entrar em contato pelo WhatsApp.

## Repositório

https://github.com/jerfsk8-oss/COPA_CONECT

## Disciplina

Programação para Dispositivos Móveis em Android

Professor: Julio Cartier

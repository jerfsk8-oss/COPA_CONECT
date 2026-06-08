# COPA_CONECT

Aplicativo desenvolvido em React Native para conectar moradores de Copacabana a pequenos empreendedores e prestadores de serviços locais.

## Objetivo

O COPA_CONECT tem como objetivo facilitar a divulgação e a busca por serviços de profissionais autônomos da região, permitindo o cadastro e consulta de prestadores de serviços de forma simples e rápida.

## Tecnologias Utilizadas

- React Native
- Expo
- Expo Router
- SQLite
- TypeScript

## Funcionalidades

- Cadastro de serviços
- Listagem de serviços cadastrados
- Exclusão de serviços
- Persistência de dados utilizando SQLite
- Navegação entre telas

## Estrutura do Projeto

```text
app/
├── index.tsx
├── cadastro.tsx
├── servicos.tsx
├── database/
│   └── db.ts
```

## Requisitos Técnicos Atendidos

✅ React Native

✅ Navegação entre telas

✅ Banco de dados SQLite

✅ Operações CRUD

- Create (Criar)
- Read (Consultar)
- Delete (Excluir)
- Update (Em desenvolvimento)

✅ Interface responsiva para dispositivos móveis

## Como Executar

Instalar dependências:

```bash
npm install
```

Executar o projeto:

```bash
npx expo start
```

## Exemplo de Uso

1. Cadastrar um prestador de serviço.
2. Consultar serviços cadastrados.
3. Excluir registros quando necessário.

## Autor

Jefferson Sousa

Projeto acadêmico da disciplina Programação para Dispositivos Móveis.
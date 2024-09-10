# Aplicação Team List

## Descrição

Este é um projeto simples em React que renderiza uma lista de membros da equipe usando JSX e componentes funcionais. A aplicação permite alternar entre dois temas: claro e escuro. Cada membro da equipe é exibido em um cartão com seu nome, cargo e imagem. O projeto foi criado para aplicar os conceitos fundamentais de React, como componentes e props.

## Funcionalidades

- **Renderização de membros da equipe**: Exibe informações como nome, cargo e imagem de cada membro em um cartão estilizado.
- **Troca de tema**: O usuário pode alternar entre temas claro e escuro, ajustando a aparência da aplicação.
- **Responsividade**: A interface se adapta a diferentes tamanhos de tela, tornando a aplicação acessível em dispositivos móveis e desktops.

## Tecnologias Utilizadas
- **React**
- **JavaScript**
- **CSS**

## Como rodar o projeto localmente

**Pré-requisitos**:

Node.js e Git instalados

**Passos para configuração**:

Clone o repositório

        git clone <url-do-repositório>

Navegue até o diretório do projeto

        cd <diretório-do-projeto>

Instale as dependências

        npm install

Rodando a aplicação

        npm start

A aplicação será aberta no seu navegador padrão no endereço http://localhost:3000/.

## Principais Componentes
- **TeamMemberCard.js**: Componente que exibe um cartão com os dados de cada membro da equipe (imagem, nome, cargo).
- **ThemeManager.js**: Componente que permite alternar entre os temas claro e escuro.
- **ThemeContext.js**: Utiliza o React Context API para gerenciar o tema globalmente e possibilitar a troca de tema em toda a aplicação.
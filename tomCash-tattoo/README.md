# TomCash Tattoo 

![Logo TomCash](/src/assets/logo1.png)

### Introdução

Bem-vindo à documentação do projeto "Site Tom Cash Tattoo". Este documento tem como objetivo fornecer uma visão abrangente sobre o projeto, sua estrutura, tecnologias utilizadas e como configurá-lo e executá-lo em seu ambiente de desenvolvimento. O projeto consiste em um website desenvolvido para o estúdio de tatuagem Tom Cash Tattoo, apresentando informações sobre o estúdio, portfólio de trabalhos, informações de contato e possivelmente outras funcionalidades relevantes.

Esta documentação foi elaborada para ser clara e acessível, auxiliando tanto desenvolvedores que venham a trabalhar no projeto quanto usuários interessados em entender sua arquitetura e funcionamento. Seguimos as melhores práticas de desenvolvimento e documentação para garantir um material completo e de fácil consulta.

### Visão Geral do Projeto

O "Site Tom Cash Tattoo" é uma aplicação web moderna construída com o objetivo de estabelecer a presença online do estúdio de tatuagem. Ele serve como um portfólio digital, um canal de comunicação com clientes e uma plataforma para divulgar informações importantes sobre os serviços oferecidos. O desenvolvimento focou em criar uma interface de usuário atraente, responsiva e performática, utilizando tecnologias de ponta no ecossistema frontend.

### Tecnologias Utilizadas

O projeto foi desenvolvido utilizando um conjunto de tecnologias modernas e eficientes, focadas em proporcionar uma ótima experiência tanto para o desenvolvedor quanto para o usuário final. As principais tecnologias incluem:

***• React:** Uma biblioteca JavaScript declarativa, eficiente e flexível para construir interfaces de usuário (UI). O React permite a criação de componentes reutilizáveis que gerenciam seu próprio estado, resultando em aplicações complexas que podem ser facilmente mantidas e escaladas.

***• Vite:** Uma ferramenta de build extremamente rápida para desenvolvimento web moderno. Vite oferece um servidor de desenvolvimento nativo ESM (ECMAScript Modules) que proporciona um início quase instantâneo e Hot Module Replacement (HMR) extremamente rápido, melhorando significativamente a experiência de desenvolvimento.

***• JavaScript (ESM):** A linguagem de programação principal utilizada no frontend, aproveitando os recursos mais recentes do ECMAScript para um código mais limpo e eficiente.

***• CSS:** Utilizado para estilização dos componentes e da interface geral do site, garantindo um visual atraente e consistente.

***• React Router DOM:** Biblioteca para gerenciamento de rotas na aplicação React, permitindo a navegação entre diferentes páginas e seções do site de forma dinâmica e organizada.

***• Axios:** Um cliente HTTP baseado em Promises para navegador e Node.js, utilizado para realizar requisições à API do backend (caso existente) ou a serviços externos.

***• Swiper:** Uma biblioteca moderna para criação de sliders e carrosséis touch, utilizada provavelmente para exibir galerias de imagens ou portfólios de forma interativa.

**• Outras Dependências:** O projeto também utiliza outras bibliotecas como *animate.css* para animações, *react-icons* para ícones, *react-image-gallery* para galerias de imagem, e ferramentas de desenvolvimento como ESLint para linting de código.

### Estrutura do Projeto

Compreender a organização dos arquivos e diretórios é fundamental para navegar e contribuir com o projeto. A estrutura segue um padrão comum para aplicações React desenvolvidas com Vite, com algumas convenções adicionais possivelmente adotadas pela desenvolvedora:

![Estrutura de pastas](/src/assets/estrutura-cod.png)

Esta estrutura separa claramente as responsabilidades: **public** para arquivos estáticos, **src** para o código fonte do frontend (dividido em assets, componentes e páginas), **scripts** para tarefas de automação e backend (se confirmado) para a lógica do servidor. O arquivo **main.jsx** inicializa a aplicação React, **App.jsx** geralmente define a estrutura principal e o roteamento (possivelmente auxiliado por **Routes.jsx**), e **index.html** é a página servida pelo Vite.

### Configuração e Instalação

Para configurar o ambiente de desenvolvimento e instalar as dependências necessárias, siga os passos abaixo. Certifique-se de ter o Node.js (versão 18+ recomendada) e o npm (ou Yarn/pnpm) instalados em sua máquina.

**1. Clonar o Repositório:** Obtenha uma cópia local do projeto utilizando Git:

2. **Instalar Dependências:** Navegue até o diretório tomCash-tattoo (se ainda não estiver nele) e execute o comando para instalar todas as dependências listadas no package.json: no terminal bash rode *npm install*.

3. **Configuração do Backend (Se Aplicável):** Se o projeto incluir um backend na pasta /backend, pode ser necessário navegar até esse diretório (cd backend) e instalar suas dependências separadamente (npm install). Verifique se há um arquivo .env.example ou instruções no README do backend para configurar variáveis de ambiente (como conexões de banco de dados, chaves de API, etc.). Crie um arquivo .env a partir do exemplo e preencha os valores necessários. Por enquanto o backend não está sendo utilizado.

### Executando o Projeto

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento do frontend e, se aplicável, o servidor backend.

1. **Iniciar o Frontend (Servidor de Desenvolvimento Vite):** No diretório tomCash-tattoo, execute: *npm ru dev*.

2. **Iniciar o Backend (Se Aplicável):** Se houver um backend, navegue até o diretório /backend em um terminal separado e execute o comando para iniciar o servidor (o comando exato pode variar, verifique o package.json do backend, mas geralmente é algo como):

Com o servidor de desenvolvimento frontend (e backend, se houver) em execução, você pode acessar o site no seu navegador através do endereço fornecido pelo Vite.

### Scripts Disponíveis

O arquivo package.json define vários scripts que podem ser executados com npm run <script_name> para automatizar tarefas comuns de desenvolvimento:

*• npm run dev:* Inicia o servidor de desenvolvimento Vite com HMR.

*• npm run build:* Compila e otimiza a aplicação frontend para produção. Os arquivos resultantes são geralmente colocados em um diretório dist/.

*• npm run optimize:* Executa o script scripts/optimize-images.js (otimizar imagens no diretório src/assets ou public). Este script é executado automaticamente antes do build (prebuild).

### Considerações sobre o Backend

Está presente no projeto, mas ainda não está sendo utilizado, faz parte de uma funcionalidade desativada *por enquanto*.

### Contribuição e Manutenção

Para contribuir com o desenvolvimento ou realizar a manutenção do projeto, siga as diretrizes de estilo de código (verificadas pelo ESLint) e a estrutura de projeto estabelecida. Ao adicionar novos componentes ou páginas, mantenha a organização nas pastas src/components e src/pages. Para novas funcionalidades que exijam interação com o backend, certifique-se de que a API correspondente esteja implementada e documentada. Utilize o Git para controle de versão, criando branches para novas funcionalidades ou correções e submetendo Pull Requests para revisão (se aplicável em um ambiente de equipe).

Esta documentação visa fornecer um ponto de partida sólido. À medida que o projeto evolui, será mantida atualizada com novas funcionalidades. 

#### **Desenvolvido por *Anna***:cherry_blossom:
Desenvolvedora Front End :sparkles: 

#### :speech_balloon: Entre em contato :dizzy:

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:annacarolinemm@gmail.com)
[![LindIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/anna-caroline-miranda-martins)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/diamond.anna_/)
















# Desafio Coleta GRX 

![]()
<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Melhorias possíveis](#melhorias-possíveis)

- [Stacks utilizadas](#stacks-utilizadas)

- [Etapa mais desafiadora](#etapa-mais-desafiadora)

- [Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)

- [Feedback sobre o desafio](#feedback-sobre-o-desafio)

# Descrição do Projeto

Desafio proposto pela GRX, onde:

- Front-end:
  * Foi solicitado a criação de um formulário com 4 campos (3 perguntas e uma área de texto para justificativa).

- Back-end:
  * Criação de uma API, usando uma arquitetura MSC em NodeJs, para o armazenamento e retorno dos dados calculados de cada formulário enviado pelo front-end.

# :construction: Melhorias possíveis:

- Testes para o front-end 
- Finalizar os testes do back-end 
- Melhorar a responsividade 
- Subir a aplicação para o HEROKU 
- Usar typescript no backend
- Trocar de arquivo para algum banco de dados

# :books: Stacks utilizadas

### Front-end
- [ReactJs](https://pt-br.reactjs.org/) 
- [Bootstrap](https://getbootstrap.com/) 
- [Axios](https://axios-http.com/ptbr/docs/intro)

### Back-end
- [NodeJs](https://nodejs.org/en/) 
- [Nodemon](https://www.npmjs.com/package/nodemon) 
- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://expressjs.com/pt-br/) 
- [Mocha](https://mochajs.org/)

# Etapa mais desafiadora

- Relembrar o React foi bem desafiador, porém, acredito que mais desafiador ainda foi conectar o front com o back. Ainda não tinha feito algo do tipo e vários problemas surgiram, um deles foi a falta do CORS no backend, mesmo depois de configurar o AXIOS no front, ficava retornando erro e demorou um tempo para perceber o motivo.
- Pontuando um outro desafio foi começar um projeto full stack do zero, mas foi incrível perceber que as lembranças fluíam de forma natural no desenrolar do desafio.

# 🛠️ Abrir e rodar o projeto

1. Clone o repositório
  * `git clone git@github.com:williamnstolb/desafioGRX.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd app`

2. Instale as dependências e inicialize
  * Instale as dependências no front-end:
    * `cd frontend`
    * `npm install`
  * Instale as dependências no back-end:
    * `cd backend`
    * `npm install`
  * Inicialize o projeto:
    * Na pasta do front-end `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
    * Na pasta do back-end `npm run dev` (o back-end começará a rodar na porta 3000)

# Feedback sobre o desafio

- Uma das regras pede para dispor um contador que fica vermelho caso seja extrapolada uma das duas regras da caixa de texto
(mínimo de 15 e máximo de 200 caracteres), sendo que uma opção do HTML é justamente criar o limite máximo, não deixando ultrapassar. Uma forma que vejo
para melhorar seria não ter a regra de caracteres máximo, mas ter uma regra de que o botão enviar ficaria desabilitado no caso de passar de 200,
nesse momento ficaria vermelho o contador. Não é muito funcional, mas seria bom para testar lógica.
- Outro ponto que gostaria de expor, é que adorei a pergunta na entrevista inicial sobre a nota que eu dava pra cada stack, isso me fez procurar mais sobre bootstrap
e apliquei nesse desafio.
- No mais, foi um ótimo desafio. Me fez lembrar muita coisa sobre ReactJs e colocar em prática alguns conhecimentos do NodeJs. Fora que me fez olhar para CSS
com mais agrado. 

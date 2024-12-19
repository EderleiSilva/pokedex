# Quest Pokedex
Esse projeto foi dado como Quest avançada de React do curso [DevEmDobro](https://dev-em-dobro.ticto.club/signin) do conteúdo DevQuest Frontend com o proposito de colocar em pratica todo o aprendizado até o momento.

1. Foi pedido para criar uma aplicação que mostre na home uma lista de 10 pokemons, que tenha um botão para acrescentar mais 10 pokemons a essa lista sempre que for clicado e que tenha um botão para trocar o tema da pagina.

2. Foi solicitado que cada pokemon fosse clicavel que ao clicar iria para a pagina com as informções dos pokemons.
Nessa pagina foi solicitado para aparecer as seguintes informações:
    - Imagem do pokemon
    - Nome
    - Lista de movimentos do pokemon (moves)
    - Lista de habilidades do pokemon (abilities)
        - a lista de habilidades deve apresentar o nome e o texto descritivo da habilidade
    - Tipo do pokemon (type)

## Funcionalidades da aplicação
- Foi criado um botão na area de navegação da aplicação para trocar o tema da pagina puxando icone gratuito do Font Awesome que também foi utilizado para colocar os icones das redes sociais como imagem SVG.

- Foi utilizado a imagem de uma pokedex para criar um link na area de navegação da aplicação, com esse link podemos voltar para a lista de pokemons depois de entrar no detalhe de algum pokemon.

- Foi criado um sistema de busca dos pokemons que ao digitar ele filtra os pokemons renderizados na que contenha as letras digitadas, para buscar um pokemon que não esteja renderizado precisa escrever o nome do pokemon certo e clicar na lupa para poder fazer a busca.

- Cada card de pokemon foi envolto com um Link para poder acessar a pagina de detalhes, fazendo que todo o card seja clicavel.

- O botão para carregar mais pokemons adiciona mais 10 pokemons em uma lista que ao ser atualizada faz a renderização dos pokemons.

- Foi criado um rodapé informando que essa aplicação é uma Quest do curso e com o link das minhas redes sociais que é aluno e criador da aplicação.

- Ao clicar em um pokemon a navegação e o rodapé não some, atualizando somente a parte do meio da aplicação.

<details>
<summary>Gif da Aplicação</summary>
<<<<<<< HEAD
    ![Gif da aplicação em execução](<img src='./src/assets/gif/projeto-pokedex.gif' alt='Gif da aplicação em execução' />)
</destails>
=======
<img src='./public/gif/projeto-pokedex.gif' alt='Gif da aplicação em execução' />
</details>
>>>>>>> 9897b257413aef68bbc9c8cc0560115b34010312

## Ferramentas Utilizadas
### Linguagens
1. Vue.JS
    - Foi utilizado o VueJs para fazer a criação da aplicação, pois o React esta caindo em desuso.

---

2. JavaScript
    - Foi utilizado o JavaScript pois o curso é voltado para essa liguagem.
    
---

3. HTML
    - O HTML foi utilizado para renderizar na tela os resultados das funções criadas em JavaScript.
    
---

4. CSS
    - O CSS foi utilizado de varias maneiras, criando arquivo.css, fazendo a estilização inline no HTML e utilizando a biblioteca styled-components para chegar no estilo final da pagina com exido.

### Blibliotecas
<details>
<summary>React Router</summary>
Foi utilizado para fazer a navegação da pagina que vai desda lista de pokemons na pagina home quanto aos detalhes do pokemon quando clicado e a volta para a pagina home utilizando a pokedex na area de navegação da aplicação.
</details>

<details>
<summary>Axios</summary>
Foi utilizado para fazer a busca na API PokeApi. Utilizei o axios pois por ele ja retorna uma promise .json sem precisar usar o .json deixando o codigo um pouco menor.
</details>

<details>
<summary>API</summary>
Para buscar todas as informações necessarias para a aplicação foi feita a busca pela API PokeApi.
</details>

<details>
<summary>React Font Awesome Docs</summary>
Foi utilizando para poder colocar os icones de rede sociais e o icone para trocar o tema da aplicação Lith/Dark.
</details>

<details>
<summary>Styled Components</summary>
Para fazer a estilização da aplicação diretamente no arquivo da pagina, fazendo com o que a aplicação carregue a estilização somente quando estiver na pagina desejada, ou seja, se estiver na pagina home vai carregar somente a estilização da pagina home e se estiver no detalhe dos pokemons, irá carregar apenas a estilização da pagina de detalhes.
</details>

## Planejamento
No começo do planejamento foi um pouco complicado, tive alguns erros, guardeis os acertos para poder reutilizar, foi um desafio e tanto. Levei mais ou menos 2 semanas e meia para completar o desafio por completo.

Como utilizei o vite para criar meu projeto fez com que algumas funcionalidades acabou sendo utilizada de forma diferente ao do npx create-react-app, por exemplo a biblioteca React Router que tive que buscar outra forma de utilizar ela, pois do jeito que foi mostrado nas aulas não estava funcionando no meu projeto.

Pesquisei outros sites para usar de referencia para criação do meu para poder visualizar como o meu ficaria e começar a codar com a imagem dele em mente.

Utilizei o Germini para me da exemplos de como implementar algumas funcionalidades do projeto, pois algumas coisas eu sabia como funcionava apenas com o JavaScript mas para utilizar com o React estava tendo dificuldade, utilizando o Germini ele me deu exemplos de como utilizar

## Comando para poder rodar a aplicação
### comandos para instalar no projeto antes de rodar em sua maquina
- Abra o terminal na raiz do projeto

<details>
<summary>Verificar se o node js esta instalado na maquina</summary>
Para poder instalar os componentes do node js, para verifficar se tem o node em sua maquina pode usar o comando `node -v` se aparecer a versão quer dizer que ele esta instalado. Caso não apareça a versão baixe o node no link: https://nodejs.org/pt
    
```
node -v
```
</details>

<details>
<summary>instalar componentes do NodeJs</summary>
Com o terminal aberto dentro dentro da raiz do projeto digite o comando abaixo:
    
```
npm install
```
</details>

<details>
<summary>Iniciar a aplicação</summary>
Com todos as aplicações acima instaladas podemos iniciar a aplicação com o comando:
    
```
npm run dev
```
</details>

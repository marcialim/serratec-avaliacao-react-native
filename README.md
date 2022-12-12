# Avaliação de React Native - Serratec

<b>Funcionalidades </b>
- [x] O aplicativo deverá conter duas páginas: <b>Cadastro e Listagem de Produtos</b>;
- [x] A navegação entre essas páginas deverá ser feita com a utilização de um componente
de navegação – drawer, bottom tabs, stack, etc. (à escolha do aluno);
- [x] Para o cadastro e listagem de produtos deverá ser utilizada a API Fake Store API (que é
gratuita): https://fakestoreapi.com/docs

<b>Desafio Extra </b>
- [ ] Implementar o login do usuário utilizando Context e Banco de Dados Embarcado
(Realm) ou Async Storage – com dados falsos, sem necessidade de acesso a alguma
API;
- [ ] Mostrar, nas páginas, o nome do usuário logado.


<b>Observação: </b>
- O aplicativo foi desenvolvido utilizando o expo e sua visualização foi feita inteiramente pela web, pois não foi possível rodar pelo aplicativo (fica dando erro e a aplicação não abre)

<br>

## Screenshots do aplicativo

### Tela Home
- Tela básica com dois botões que direcionam o usuário para a lista de produtos ou para a página de cadastro. 
![Tela inicial](https://i.ibb.co/chGcWps/home.png)
<br> 

### Tela com a lista de produtos
- Tela carrega alguns dados de todos os produtos que existem no endpoint https://fakestoreapi.com/products da API Fake Store API. Aqui o usuário consegue clicar em qualquer produto e será direcionado para uma nova página com os detalhes desse produto.
![Tela de lista de produtos](https://i.ibb.co/NVJ2M6q/lista-de-produtos.png)
<br> 

### Tela com detalhes do produto
- Tela com os detalhes dos produtos. Nela o usuário consegue ver as informações do produto e a imagem.
![Tela de detalhes do produto](https://i.ibb.co/VQBSRHf/detalhes-produto.png)
<br>

### Tela de cadastro de produtos. 
- Aqui o usuário consegue adicionar um novo produto preenchendo todos os campos do formulário. Caso o post seja realizado com sucesso, um alerta de sucesso é exibido. Caso algum campo não seja preenchido, um outro alerta é exibido solicitando o preenchimento dos campos. 
![Tela de cadastro de produto](https://i.ibb.co/vHmGk6S/cadastro.png)
<br>

## Installation

Para instalar, rode o comando abaixo: 

```bash
npm install
```

## Como rodar no app Expo Go

```
npm run start
```

## Como rodar no navegador

```
npm run web
```

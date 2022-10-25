# SpaceX API

Esta API foi criada com o intuíto de consumir a API SpaceX e retornar os dados mais relevantes.

## Tecnologias

  - JavaScript;
  - Node.JS;
  - Express;

## Para a execução do código, é necessário
  - node v16;

## Para iniciar
  - clone esse repositório:
    ```git clone git@github.com:marinafischer/spaceX-be.git```
  - entre na pasta criada:
    ``cd spaceX-be``
  - na raiz do projeto execute o comando:
    ```npm install```
  - rode o comando:
    ```npm start```
  - a aplicação será iniciada na porta 3001 da sua máquina (é muito importante que você não altere essa porta)

## Documentação da API

### Obter Dados da Próxima Decolagem

```http
  GET /launches/next
```

```esta rota retorna um objeto com as informações mais relevantes da próxima decolagem prevista```

Quando a requisição é realizada com sucesso, retorna um JSON com o seguinte formato:

  ```json
  {
    "id": "id do lançamento",
    "name": "nome do lançamento",
    "rocket": "código do foguete",
    "date": "data no formato UTC",
    "image": "link para a imagem quando existir"
  }
  ```

### Obter Dados da Última Decolagem

```http
  GET /launches/latest
```

```esta rota retorna um objeto com as informações mais relevantes da última decolagem realizada```

Quando a requisição é realizada com sucesso, retorna um JSON com o seguinte formato:

  ```json
  {
    "id": "id do lançamento",
    "name": "nome do lançamento",
    "rocket": "código do foguete",
    "date": "data no formato UTC",
    "image": "link para a imagem quando existir"
  }
  ```

### Obter Dados das Próximas Decolagens

```http
  GET /launches/upcoming
```

```esta rota retorna um array de objetos com as informações mais relevantes das próximas decolagens prevista```

Quando a requisição é realizada com sucesso, retorna um JSON com o seguinte formato:

  ```json
  [
    {
      "id": "id do lançamento",
      "name": "nome do lançamento",
      "rocket": "código do foguete",
      "date": "data no formato UTC",
      "image": "link para a imagem quando existir"
    }
  ]
  ```

### Obter Dados das Últimas Decolagens

```http
  GET /launches/past
```

```esta rota retorna um array de objetos com as informações mais relevantes das últimas decolagens realizadas```

Quando a requisição é realizada com sucesso, retorna um JSON com o seguinte formato:

  ```json
  [
    {
      "id": "id do lançamento",
      "name": "nome do lançamento",
      "rocket": "código do foguete",
      "date": "data no formato UTC",
      "image": "link para a imagem quando existir"
    }
  ]
  ```

## Alguma dúvida?

- LinkedIn: [Marina Fischer](https://www.linkedin.com/in/marina-miranda-fischer/)

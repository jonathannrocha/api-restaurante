# Api restaurante

Projeto desenvolvido par afins estudantis.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jonathannrocha/api-login-refresh-token
```

Entre no diretório do projeto

```bash
  cd api-login-refresh-token
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```
<br>


## Documentação da API

<br>

#### Criando um categoria nova

<br>

```http
  POST /categories
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. |
| `icon` | `string` | **Obrigatório**. |

<br>

### Listar categorias

<br>

```http
  GET /categories
```
<br>

#### Cadastro de produto


```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**.  |
| `description`      | `string` | **Obrigatório**.  |
| `price`      | `string` | **Obrigatório**.  |
| `ingredients`      | `string` | **opicional**.  |
| `categoryId`      | `string` | **Obrigatório**.  |
| `image`      | `file` | **Obrigatório**.  |

<br>

#### Lista de produtos cadastrados

```http
  GET /products
```

<br>

#### Lista de produtos cadastrados por categoria

```http
  POST /categories/:categoryId/products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `categoryId`      | `string` | **Obrigatório**.  |

<br>

#### criar pedido

```http
  POST /orders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `table`      | `string` | **Obrigatório**.  |
| `products`      | `string` | **Obrigatório**.  |

<br>

#### Listar pedidos

```http
  GET /orders
```
<br>

#### Listar pedidos por Id

```http
  GET /orders/:orderId
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `orderId`      | `string` | **Obrigatório**.  |

<br>

## Stack utilizada

- `NodeJs`

<br>

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jonathannrocha/api-login-refresh-token
```

Entre no diretório do projeto

```bash
  cd api-login-refresh-token
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```
<br>

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

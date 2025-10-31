# Projeto: Visualizador de Usuários via API

Este projeto é uma aplicação web simples feita com **HTML** e **JavaScript** que consome uma API para mostrar informações dos usuários em tela.

## Funcionalidades

- Consome dados de uma API (pode ser REST, JSON, etc.).
- Lista os usuários retornados pela API.
- Interface simples e fácil de usar.

## Como usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Abra o arquivo `index.html` no seu navegador.**
   - Não precisa de servidor local, basta abrir o arquivo.

3. **Veja os usuários aparecendo na tela!**

## Estrutura do Projeto

```
├── index.html
├── script.js
├── README.md
```

- `index.html`: Estrutura básica do site.
- `script.js`: Código JavaScript responsável por buscar os dados da API e exibir os usuários.

## Exemplo de Uso

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Usuários da API</title>
</head>
<body>
  <h1>Lista de Usuários</h1>
  <ul id="user-list"></ul>
  <script src="script.js"></script>
</body>
</html>
```

```js
// script.js
fetch('https://sua-api.com/usuarios')
  .then(res => res.json())
  .then(usuarios => {
    const lista = document.getElementById('user-list');
    usuarios.forEach(user => {
      const item = document.createElement('li');
      item.textContent = user.nome; // adapta ao seu modelo
      lista.appendChild(item);
    });
  });
```

## Personalização

- Troque a URL da API no `script.js` para o endereço desejado.
- Adapte os campos mostrados conforme os dados da sua API.

## Licença

Este projeto está sob a licença MIT.

---

Feito por [Vinicius Bertunho](https://github.com/vinibertunho)

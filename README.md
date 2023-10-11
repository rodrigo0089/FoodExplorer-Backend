## 💻 Sobre

Esta é uma API em Node.js para um restaurante fictício que permite criar contas de usuário, verificar se o mesmo já existem, criptografar senhas, fazer a criação, edição e alteração de pratos no bando de dados, fazer upload de imagens

---

## 🛠 Tecnologias

Segue abaixo algumas das tecnologias utilizada neste projeto:

- Node.js
- Express
- Styled Components
- SQLite
- Knex
- JSON Web Token
- CORS
- BCryptjs

---

### 🚧 Segurança

- Senhas são armazenadas de forma criptografada no banco de dados usando o BCryptjs.

- Autenticação é feita por meio de tokens JWT.

- A API utiliza o CORS para controlar o acesso a partir de diferentes origens.

#### 🚧 Executando o BackEnd

```bash
# No BackEnd insira uma porta e um secret no arquivo .env vazio
  AUTH_SECRET=
  PORT=

# Utilizando o terminal vá ate a pasta onde se encontra a pasta do Backend
$ cd FoodExplorer-Backend

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do BackEnd
$ npm run dev

# Com o servidor Backend rodando, siga para o Frontend
```
# [Deploy do projeto]()
---

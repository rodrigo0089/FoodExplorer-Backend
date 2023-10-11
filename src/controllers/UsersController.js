const { hash } = require("bcryptjs");

const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso!");
    }

    if (name.length < 3) {
      throw new AppError("Digite um nome válido!");
    }

    if (!email.includes("@", ".") || !email.includes(".")) {
      throw new AppError("Digite um email válido!");
    }

    if (password.length < 6) {
      throw new AppError("A senha deve ter pelo menos 6 dígitos!");
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password ) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return response.status(201).json();
  }
}

module.exports = UsersController;

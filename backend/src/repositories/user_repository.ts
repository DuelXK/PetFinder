import db from "../db";

export default class UserRepository {
  async findUser(email: string, isPassMatch: boolean = false) {
    try {
      const column = isPassMatch ? "USERS.id" : "USERS.password";
      return await db
        .select(column)
        .from("USERS")
        .where("USERS.email", email)
        .first();
    } catch (e) {
      throw "fail to find user repository";
    }
  }
  async findUserEmail(id: number) {
    try {
      return await db
        .select("email")
        .from("USERS")
        .where("USERS.id", id)
        .first();
    } catch (e) {
      throw "fail to find user repository";
    }
  }

  async createUser(email: string, password: string) {
    try {
      return await db
        .insert({
          email,
          password,
        })
        .into("USERS")
        .then(
          async () =>
            await db
              .select("id")
              .from("USERS")
              .where("USERS.email", email)
              .first()
        );
    } catch (e) {
      console.log(e);
      throw "fail in create User repository";
    }
  }

  async updateUser(id: number, email?: string, password?: string) {
    try {
      const updateAt: { email?: string; password?: string } = {};
      if (email !== undefined) updateAt.email = email;
      if (password !== undefined) updateAt.password = password;
      // return await
    } catch (e) {
      throw "fail to update user email/password";
    }
  }

  async deleteUser(idUser: number) {
    try {
      return await db.from("USERS").delete().where("USERS", idUser);
    } catch (e) {
      throw "fail to update user";
    }
  }
}

import db from "../db";

export default class UserInfoRepository {
  async findUserById(id: number) {
    try {
      return await db
        .select("USERS.id")
        .from("USERS")
        .where("USERS.id", id)
        .first()
        .then(() => true);
    } catch (e) {
      throw "fail to find usersInfo repository";
    }
  }

  async findUsersInfo() {
    try {
      return await db
        .select(
          "USERINFO.name",
          "USERINFO.street",
          "USERINFO.number",
          "STATES.name",
          "CITY.name"
        )
        .from("USERINFO")
        .leftJoin("USERS", "USERS.id", "USERINFO.user_id")
        .leftJoin("CITY", "CITY.id", "USERINFO.id_city")
        .leftJoin("STATES", "STATES.id", "CITY.id_state");
    } catch (e) {
      throw "fail to find usersInfo repository";
    }
  }

  async createUsersInfo(
    name: string,
    street: string,
    number: string,
    idState: number,
    idCity: number,
    userId: number
  ) {
    try {
      return await db
        .insert({
          name,
          street,
          number,
          id_state: idState,
          id_city: idCity,
          id_user: userId,
        })
        .into("USERINFO")
        .then(() => "user created");
    } catch (e) {
      throw "fail in create UserInfo repository";
    }
  }

  async updateUsersInfo(
    id: number,
    name: string,
    street: string,
    number: number,
    idState: number,
    idCity: number,
    idUser: number
  ) {
    try {
      return await db
        .from("USERINFO")
        .update({
          name,
          street,
          number,
          id_state: idState,
          id_city: idCity,
          id_user: idUser,
        })
        .where("USERID", id)
        .then(() =>
          db
            .select(
              "USERINFO.name",
              "USERINFO.street",
              "USERINFO.number",
              "STATES.name",
              "CITY.name"
            )
            .from("USERINFO")
            .leftJoin("USERS", "USERS.id", "USERINFO.user_id")
            .leftJoin("CITY", "CITY.id", "USERINFO.id_city")
            .leftJoin("STATES", "STATES.id", "CITY.id_state")
            .where("USERS.id", id)
            .first()
        );
    } catch (e) {
      throw "fail in update UserInfo repository";
    }
  }

  async deleteUserInfo(idUserInfo: number) {
    try {
      return await db.from("USERINFO").delete().where("USERID", idUserInfo);
    } catch (e) {
      throw "fail in delete UserInfo repository";
    }
  }
}

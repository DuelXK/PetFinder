import db from "../db";

import { v4 } from "uuid";

export default class PetRegistrationRepository {
  async findAll(city: string, user: string) {
    try {
      return await db
        .select(
          "PETS.id AS petId",
          "PETS.name AS petName",
          "PETS.breed",
          "PETS.weight",
          "PETS.id_city",
          "CITY.name AS cityName",
          "USERINFO.name AS userName"
        )
        .from("PETS")
        .leftJoin("CITY", "CITY.id", "PETS.id_city")
        .leftJoin("USERINFO", "USERINFO.id", "PETS.id_userInfo")
        .leftJoin("USERS", "USERS.id", "USERINFO.id_user")
        .where("CITY.name", "LIKE", `${city.toUpperCase()}%`)
        .where("USERS.email", "LIKE", `${user.toLowerCase()}%`);
    } catch (e) {
      throw "fail to find pets repository";
    }
  }

  async findUniquePet(id: number) {
    try {
      return await db
        .select(
          "PETS.name AS petName",
          "PETS.breed",
          "PETS.weight",
          "CITY.name AS cityName",
          "USERINFO.name AS userName",
          "USERS.email"
        )
        .from("PETS")
        .leftJoin("CITY", "CITY.id", "PETS.id_city")
        .leftJoin("USERINFO", "USERINFO.id", "PETS.id_userInfo")
        .leftJoin("USERS", "USERS.id", "USERINFO.id_user")
        .where("PETS.id", id)
        .first();
    } catch (e) {
      throw "fail to find unique pet repository";
    }
  }

  async createPet(
    name: string,
    breed: string,
    weight: number,
    idCity: number,
    idUserInfo: number
  ) {
    try {
      const uuid = v4();
      console.log({
        name,
        breed,
        weight,
        id_city: idCity,
        id_userInfo: idUserInfo,
        uuid,
      });
      return await db
        .insert({
          name,
          breed,
          weight,
          id_city: idCity,
          id_userInfo: idUserInfo,
          uuid,
        })
        .into("PETS")
        .then(
          async () =>
            await db
              .select(
                "PETS.id AS petId",
                "PETS.name AS petName",
                "PETS.breed",
                "PETS.weight",
                "PETS.id_city",
                "CITY.name AS cityName",
                "USERINFO.name AS userName"
              )
              .from("PETS")
              .leftJoin("CITY", "CITY.id", "PETS.id_city")
              .leftJoin("USERINFO", "USERINFO.id", "PETS.id_userInfo")
              .where("PETS.uuid", uuid)
              .first()
        );
    } catch (e) {
      throw "fail in create Pet repository";
    }
  }

  async updatePet(
    id: number,
    name: string,
    breed: string,
    weight: number,
    idCity: number,
    idUserInfo: number
  ) {
    try {
      return await db
        .from("PETS")
        .update({
          name,
          breed,
          weight,
          id_city: idCity,
          id_userInfo: idUserInfo,
        })
        .where("PETS.id", id)
        .then(
          async () =>
            await db
              .select(
                "PETS.id AS petId",
                "PETS.name AS petName",
                "PETS.breed",
                "PETS.weight",
                "PETS.id_city",
                "CITY.name AS cityName",
                "USERINFO.name AS userName"
              )
              .from("PETS")
              .leftJoin("CITY", "CITY.id", "PETS.id_city")
              .leftJoin("USERINFO", "USERINFO.id", "PETS.id_userInfo")
              .where("PETS.id", id)
              .first()
        );
    } catch (e) {
      throw "fail in update Pet repository";
    }
  }

  async deletePet(id: number) {
    try {
      return await db
        .from("PETS")
        .delete()
        .where("PETS.id", id)
        .then(() => ({ message: "pet deleted", id }));
    } catch (e) {
      throw "fail in delete Pet repository";
    }
  }
}

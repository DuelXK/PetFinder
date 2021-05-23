import db from "../db";

export default class StateRepository {
  async findAllStates() {
    try {
      return await db.select("id", "name", "uf").from("STATES");
    } catch (e) {
      throw "fail in state repository";
    }
  }
}

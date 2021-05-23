import CityRepository from "../repositories/city_repository";

export default class FindCitiesStatesUsecase {
  private cityRep: CityRepository;

  constructor(cityRep: CityRepository) {
    this.cityRep = cityRep;
  }

  async find(state: string) {
    try {
      if (state.length !== 2) throw "not a uf";
      return await this.cityRep.findAll(state);
    } catch (e) {
      throw e;
    }
  }
}

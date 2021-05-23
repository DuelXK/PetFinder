import db from '../db';

export default class CityRepository {
  async findAll(cityState: string) {
    try {
      return await db
        .select('CITY.id', 'CITY.name')
        .from('CITY')
        .leftJoin('STATES', 'STATES.id', 'CITY.id_state')
        .andWhere('STATES.uf', cityState.toUpperCase())
    } catch (e) {
      throw 'fail to find unique city in city repository';
    }
  }
  async findUniqueCity(cityName: string, cityState: string) {
    try {
      return await db
        .select('CITY.id')
        .from('CITY')
        .leftJoin('STATES', 'STATES.id', 'CITY.id_state')
        .where('CITY.name', cityName.toUpperCase())
        .andWhere('STATES.uf', cityState.toUpperCase())
        .first();
    } catch (e) {
      throw 'fail to find unique city in city repository';
    }
  }
}

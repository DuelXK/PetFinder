import StateRepository from "../repositories/state_repository";

export default class FindStatesUsecases {
  private stateRep: StateRepository;

  constructor(stateRep: StateRepository) {
    this.stateRep = stateRep;
  }

  async find() {
    try {
      return await this.stateRep.findAllStates();
    } catch (e) {
      throw e;
    }
  }
}

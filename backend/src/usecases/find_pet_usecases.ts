import PetRepository from '../repositories/pet_repository';

export default class FindPetUsecase {
  private petRep: PetRepository;
  constructor(petRep: PetRepository) {
    this.petRep = petRep;
  }

  async findUniquePet(id: number) {
    try {
      const petUnique = await this.petRep.findUniquePet(id);
      return petUnique;
    } catch (e) {
      throw e;
    }
  }
}

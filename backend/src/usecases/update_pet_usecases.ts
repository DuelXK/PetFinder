import PetRepository from '../repositories/pet_repository';

export default class UpdatePetUsecase {
  private petRep: PetRepository;
  constructor(petRep: PetRepository) {
    this.petRep = petRep;
  }

  async updatePetUsecase(
    id: number,
    name: string,
    breed: string,
    weight: number,
    idCity: number,
    idUserInfo: number
  ) {
    try {
      const updatePet = await this.petRep.updatePet(
        id,
        name,
        breed,
        weight,
        idCity,
        idUserInfo
      );
      return updatePet;
    } catch (e) {
      throw e;
    }
  }
}

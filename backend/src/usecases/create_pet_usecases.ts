import PetRepository from '../repositories/pet_repository';

export default class RegisterPetUsecase {
  private petRep: PetRepository;
  constructor(petRep: PetRepository) {
    this.petRep = petRep;
  }

  async registerPet(
    name: string,
    breed: string,
    weight: number,
    idCity: number,
    idUserInfo: number
  ) {
    try {
      const pet = await this.petRep.createPet(
        name,
        breed,
        weight,
        idCity,
        idUserInfo
      );
      return pet;
    } catch (e) {
      throw e;
    }
  }
}

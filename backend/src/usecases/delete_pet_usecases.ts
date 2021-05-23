import PetRepository from '../repositories/pet_repository';

export default class DeletePetUsecase {
  private petRep: PetRepository;
  constructor(petRep: PetRepository) {
    this.petRep = new PetRepository();
  }

  async deletePetUsecase(idPet: number) {
    try {
      const petDelete = await this.petRep.deletePet(idPet);
      return petDelete;
    } catch (e) {
      throw e;
    }
  }
}

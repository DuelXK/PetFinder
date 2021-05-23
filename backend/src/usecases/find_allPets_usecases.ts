import PetRepository from "../repositories/pet_repository";
import UserRepository from "../repositories/user_repository";

export default class FindPetUsecase {
  private petRep: PetRepository;
  private userRep: UserRepository;
  constructor(petRep: PetRepository, userRep: UserRepository) {
    this.petRep = petRep;
    this.userRep = userRep;
  }

  async findAllPet(city: string = "", userId?: string) {
    try {
      if (userId === undefined) {
        const allPets = await this.petRep.findAll(city, "");
        return allPets;
      }
      const user = await this.userRep.findUserEmail(parseInt(userId));
      if (user === undefined) throw "fail to find user email";
      return await this.petRep.findAll(city, user.email);
    } catch (e) {
      throw e;
    }
  }
}

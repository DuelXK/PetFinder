import UserRepository from '../repositories/user_repository';

export default class FindUserUsecase {
  private userRep: UserRepository;
  private cryptService: any;
  constructor(userRep: UserRepository, cryptService: any) {
    this.userRep = userRep;
    this.cryptService = cryptService;
  }

  async findUser(email: string, password: string) {
    try {
      const user = await this.userRep.findUser(email);
      if (user === undefined) throw 'incorrect email or password';
      if ((await this.cryptService.isMatch(password, user.password)) as boolean)
        return await this.userRep.findUser(email, true);
      throw 'incorrect email or password'
    } catch (e) {
      throw e;
    }
  }
}

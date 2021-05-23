import UserInfoRepository from '../repositories/userInfo_repository';

export default class FindUserinfoByIdUsecase {
  private userinfoRep: UserInfoRepository;

  constructor(userinfoRep: UserInfoRepository) {
    this.userinfoRep = userinfoRep;
  }

  async findUser(id: number): Promise<boolean> {
    try {
      const findedUser = await this.userinfoRep.findUserById(id);
      if (findedUser) return true;
      throw 'user not finded';
    } catch (e) {
      throw e;
    }
  }
}

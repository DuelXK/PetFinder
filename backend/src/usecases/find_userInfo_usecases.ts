import UserInfoRepository from '../repositories/userInfo_repository';

export default class FindUserInfoUsecase {
  private userInfoRep: UserInfoRepository;
  constructor(userInfoRep: UserInfoRepository) {
    this.userInfoRep = userInfoRep;
  }

  async findUserInfo() {
    try {
      const userInfo = await this.userInfoRep.findUsersInfo();
      return userInfo;
    } catch (e) {
      throw e;
    }
  }
}
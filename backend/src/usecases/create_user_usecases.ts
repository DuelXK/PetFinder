import UserInfoRepository from "../repositories/userInfo_repository";
import UserRepository from "../repositories/user_repository";

export default class RegisterUserUsecase {
  private userRep: UserRepository;
  private userInfoRep: UserInfoRepository;
  private cryptService: any;
  constructor(
    userRep: UserRepository,
    userInfoRep: UserInfoRepository,
    cryptService: any
  ) {
    this.userRep = userRep;
    this.userInfoRep = userInfoRep;
    this.cryptService = cryptService;
  }

  async registerUser(
    email: string,
    password: string,
    name: string,
    street: string,
    number: string,
    idState: number,
    idCity: number
  ) {
    try {
      if (
        email === undefined ||
        password === undefined ||
        name === undefined ||
        street === undefined ||
        number === undefined ||
        idState === undefined ||
        idCity === undefined
      )
        throw "some info is was not inserted";
      const cryptPassword = await this.cryptService.encrypt(password);
      const user = await this.userRep.createUser(email, cryptPassword);
      const userInfoRep = await this.userInfoRep.createUsersInfo(
        name,
        street,
        number,
        idState,
        idCity,
        user.id
      );
      return userInfoRep;
    } catch (e) {
      throw e;
    }
  }
}

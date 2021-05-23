import UserRepository from "./user_repository";
import UserInfoRepository from "./userInfo_repository";
import PetRepository from "./pet_repository";
import CityRepository from "./city_repository";
import StateRepository from "./state_repository";

export const userRepository = new UserRepository();
export const userInfoRepository = new UserInfoRepository();
export const petRepository = new PetRepository();
export const cityRepository = new CityRepository();
export const stateRepository = new StateRepository();

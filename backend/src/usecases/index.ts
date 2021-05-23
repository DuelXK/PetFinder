import FindAllPetsUsecase from "./find_allPets_usecases";
import FindPetUsecase from "./find_pet_usecases";
import FindUserUsecase from "./find_user_usecases";
import FindUserInfoUsecase from "./find_userInfo_usecases";
import CreatePetUsecase from "./create_pet_usecases";
import CreateUserUsecase from "./create_user_usecases";
import UpdatePetUsecase from "./update_pet_usecases";
import DeletePetUsecase from "./delete_pet_usecases";
import FindUserByIdUsecase from "./find_userinfo_by_id_usecase";
import FindStatesUsecase from "./find_states_usecases";
import FindCitiesUsecase from "./find_cities_states_usecase";

import {
  petRepository,
  userInfoRepository,
  userRepository,
  stateRepository,
  cityRepository,
} from "../repositories";

import { cryptService } from "../services";

export const findAllPetsUsecase = new FindAllPetsUsecase(
  petRepository,
  userRepository
);
export const findPetUsecase = new FindPetUsecase(petRepository);
export const findUserUsecase = new FindUserUsecase(
  userRepository,
  cryptService
);
export const findUserInfoUsecase = new FindUserInfoUsecase(userInfoRepository);
export const createUserUsecase = new CreateUserUsecase(
  userRepository,
  userInfoRepository,
  cryptService
);
export const createPetUsecase = new CreatePetUsecase(petRepository);
export const updatePetUsecase = new UpdatePetUsecase(petRepository);
export const deletePetUsecase = new DeletePetUsecase(petRepository);
export const findUserById = new FindUserByIdUsecase(userInfoRepository);
export const findStatesUsecase = new FindStatesUsecase(stateRepository);
export const findCitiesUsecase = new FindCitiesUsecase(cityRepository);

import migrateDb from "../../migrate_db";

import {
  createPetUsecase,
  findPetUsecase,
  updatePetUsecase,
  deletePetUsecase,
  findAllPetsUsecase,
} from "../usecases";

test("create pet", async () => {
  try {
    await migrateDb();
    const pet = await createPetUsecase.registerPet("Toby", "Shih Tzu", 7, 4, 4);

    expect(pet).toEqual({
      PetName: "Toby",
      breed: "Shih Tzu",
      weight: 7,
      CityName: "ARRAIAL DO CABO",
      OwnerName: "Marcello",
    });
  } catch (e) {
    throw e;
  }
});

test("find pet", async () => {
  try {
    await migrateDb();
    const pet = await findPetUsecase.findUniquePet(1);

    expect(pet).toEqual({
      petName: "Beto",
      breed: "Husky Siberiano",
      weight: 35.5,
      cityName: "HORTOLANDIA",
      userName: "Gabriel",
    });
  } catch (e) {
    throw e;
  }
});

test("find pets by city", async () => {
  try {
    await migrateDb();
    const pet = await findAllPetsUsecase.findAllPet("CAM");

    expect(pet.length).toBe(2);
  } catch (e) {
    throw e;
  }
});

test("update pet", async () => {
  try {
    await migrateDb();
    const pet = await updatePetUsecase.updatePetUsecase(
      1,
      "Pepe",
      "Husky Siberiano",
      35.5,
      1,
      1
    );

    expect(pet).toEqual({
      PetName: "Pepe",
      breed: "Husky Siberiano",
      weight: 35.5,
      CityName: "HORTOLANDIA",
      OwnerName: "Gabriel",
    });
  } catch (e) {
    throw e;
  }
});

test("delete pet", async () => {
  try {
    await migrateDb();
    const pet = await deletePetUsecase.deletePetUsecase(1);

    expect(pet).toEqual({
      message: "pet deleted",
      id: 1,
    });
  } catch (e) {
    throw e;
  }
});

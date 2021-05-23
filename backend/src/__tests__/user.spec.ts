import migrateDb from "../../migrate_db";

import { createUserUsecase, findUserUsecase } from "../usecases";

test("create user", async () => {
  await migrateDb();
  const user = await createUserUsecase.registerUser(
    "testemail@gmail.com",
    "1234",
    "Test",
    "Rua dos bobos",
    "0",
    2,
    4
  );
  expect(user).toBe("user created");
});

test("user login", async () => {
  await migrateDb();
  const login = await findUserUsecase.findUser(
    "gabriel@hotmail.com",
    "mecontrata"
  );
  expect(login.id).toBe(1);
});

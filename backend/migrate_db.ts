import db from './src/db';

const rollback = async () => {
  return await db.migrate.rollback();
};

const latest = async () => {
  return await db.migrate.latest();
};

const seed = async () => {
  return await db.seed.run();
};

export default async () => {
  try {
    await rollback().then(
      async () => await latest().then(async () => await seed())
    );
  } catch (e) {
    throw 'failt in migration';
  }
};

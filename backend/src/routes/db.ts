import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp('postgres://username:password@localhost:5432/test');

export default db;

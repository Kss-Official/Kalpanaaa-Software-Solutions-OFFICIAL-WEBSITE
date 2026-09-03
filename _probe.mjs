import pg from 'pg'; import dotenv from 'dotenv'; dotenv.config();
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl:{rejectUnauthorized:false}, max:1 });
const q = async (label, sql) => {
  const r = await pool.query(sql);
  console.log(`\n=== ${label} ===`);
  console.table(r.rows);
};
await q('blogs columns', `SELECT column_name, data_type, is_nullable, column_default
  FROM information_schema.columns WHERE table_name='blogs' ORDER BY ordinal_position`);
await q('users id default', `SELECT column_name, column_default FROM information_schema.columns
  WHERE table_name='users' AND column_name='id'`);
await q('pgcrypto / uuid fns available', `SELECT extname FROM pg_extension`);
await q('server version', `SHOW server_version`);
await pool.end();

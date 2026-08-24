import pg from 'pg'; import dotenv from 'dotenv'; dotenv.config();
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl:{rejectUnauthorized:false}, max:1 });
const r = await pool.query(`SELECT email, LEFT(password,7) AS pw_prefix, LENGTH(password) AS len FROM users LIMIT 4`);
console.table(r.rows); await pool.end();

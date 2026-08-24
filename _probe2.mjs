import pg from 'pg'; import dotenv from 'dotenv'; dotenv.config();
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl:{rejectUnauthorized:false}, max:1 });
const q = async (label, sql) => { const r = await pool.query(sql); console.log(`\n=== ${label} ===`); console.table(r.rows); };
await q('existing blog ids/status', `SELECT id, status, slug FROM blogs ORDER BY created_at`);
await q('does blog_status enum exist?', `SELECT typname FROM pg_type WHERE typname IN ('blog_status','user_role')`);
await q('users columns', `SELECT column_name, data_type, column_default FROM information_schema.columns WHERE table_name='users' ORDER BY ordinal_position`);
await q('all tables', `SELECT tablename FROM pg_tables WHERE schemaname='public'`);
await q('sample user id', `SELECT id, email, role FROM users LIMIT 3`);
await pool.end();

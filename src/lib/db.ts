import mysql from "mysql2/promise";

let pool: mysql.Pool | null = null;

function getPool(): mysql.Pool {
  if (pool) return pool;

  const host = process.env.MYSQL_HOST;
  const user = process.env.MYSQL_USER;
  const password = process.env.MYSQL_PASSWORD;
  const database = process.env.MYSQL_DATABASE;

  if (!host || !user || !password || !database) {
    throw new Error(
      "Missing MySQL configuration. Set MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.",
    );
  }

  pool = mysql.createPool({
    host,
    port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
  });

  return pool;
}

/**
 * Run a parameterized query against the kmonlinesolutions database.
 * Always uses placeholders — never interpolates values into SQL.
 */
export async function dbQuery<T>(
  sql: string,
  params: Array<string | number | boolean | null | Date> = [],
): Promise<T> {
  const [rows] = await getPool().execute(sql, params as unknown as mysql.ExecuteValues[]);
  return rows as T;
}

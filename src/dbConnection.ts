import { Pool } from "pg";
import { Connection as cn } from "./config";

const pool = new Pool({
  user: cn.USER,
  host: cn.HOST,
  database: cn.DATABASE,
  password: cn.PASSWORD,
  port: cn.PORT,
});
const DB = pool;
export { DB };

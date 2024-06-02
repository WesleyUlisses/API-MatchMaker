import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import "reflect-metadata";

const DB_CONFIG = process.env.DATABASE_URL as string;

const database = new Sequelize(DB_CONFIG, {
  logging: console.log,
  dialect: "postgres",
  native: false,
});

export { database };
import { Dialect, Sequelize } from "sequelize";
import dotenv from 'dotenv';

const DATABASE = process.env.DATABASE || '';
const HOST = process.env.HOST;
const PORT = process.env.POSTGRE_PORT;
const USERNAME = process.env.USER_NAME || '';
const PASSWORD = process.env.USER_PASSWORD;
const DIALECT = process.env.DIALECT as Dialect;

const squaalizeInstance = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    port: PORT ? parseInt(PORT) : undefined,
    dialect: DIALECT,
});

export default squaalizeInstance;

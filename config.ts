import dotenv from 'dotenv';
import { env } from 'process';
import { Dialect } from 'sequelize';

dotenv.config();
const config = {
    environment: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || "5000"),
    getConfigProps: () => ({
        database: process.env.DB_NAME || 'test',
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'root',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || "5432"),
    })
};

export default config;
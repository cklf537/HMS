// import { Client } from 'pg';
// import dotenv from 'dotenv';

// dotenv.config();
// const client = new Client({
//    connectionString: process.env.DATABASE_URL,
// });

// client.connect()
//     .then(() => console.log('Connected to PostgreSQL'))
//     .catch(err => console.error('Connection error', err.stack));

// export {client};


import { Sequelize } from 'sequelize-typescript';
import config from '../../config';
import exp from 'constants';

const sequelize = new Sequelize({
    ...config.getConfigProps(),
    dialect: 'postgres',
    logging: false,
    models: [__dirname + '/../models'],
});

export default sequelize;

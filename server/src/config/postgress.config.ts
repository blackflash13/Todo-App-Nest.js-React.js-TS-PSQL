import { registerAs } from '@nestjs/config';
import { EnumConfig } from './enumConfig/enumConfig';
import { Dialect } from 'sequelize';
import postgres from 'postgres';
import * as Process from 'process';

export const pgConfig = registerAs(EnumConfig.DATABASE, () => {
  return {
    dialect: <Dialect>process.env.SQL_DIALECT || 'postgres',
    logging: process.env.SQL_LOGGING === 'true' ? true : false,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_USER,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: true,
  };
});

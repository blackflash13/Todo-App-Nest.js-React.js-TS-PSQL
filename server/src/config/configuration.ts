import { registerAs } from '@nestjs/config';
import { EnumConfig } from './enumConfig/enumConfig';
import { pgConfig } from './postgress.config';

export const databaseConfig = registerAs(EnumConfig.DATABASE, () => ({
  pg: {
    ...pgConfig(),
  },
}));

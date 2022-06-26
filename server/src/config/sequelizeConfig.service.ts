import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { Todo } from 'src/todos/models/todo.model';
import { EnumConfig } from './enumConfig/enumConfig';

export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      pg: { dialect, logging, host, port, username, password, database },
    } = this.configService.get(EnumConfig.DATABASE);

    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      models: [Todo],
      autoLoadModels: true,
      synchronize: true,
    };
  }
}

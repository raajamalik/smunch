import type { Config } from './config.interface';

/**
 * This is the global configuration object.
 * All the configuration values must be declared in config.interface.ts and then
 * corresponsiding values must be defined here.
 */
const config: Config = {
  nest: {
    port: 4000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Nestjs FTW',
    description: 'The nestjs API description',
    version: '1.5',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;

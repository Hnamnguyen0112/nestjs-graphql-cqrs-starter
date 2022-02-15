const sourcePath = process.cwd();
module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'development_db',
  entities: ['dist/entities/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [`dist/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
  cli: {
    migrationsDir: `${sourcePath}/src/migrations`,
    entitiesDir: `${sourcePath}/src/entities`,
    subscribersDir: `${sourcePath}/src/subscribers`,
  },
  logging: ['query', 'error'],
  logger: 'file',
};
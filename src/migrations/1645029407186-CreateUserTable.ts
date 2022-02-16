import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm'

const tableName = 'users'

export class CreateUserTable1645029407186 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'full_name',
            type: 'varchar',
          },

          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'is_active',
            type: 'boolean',
            default: false,
          },

          {
            name: 'created_at',
            type: 'timestamp with time zone',
            isNullable: true,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            isNullable: true,
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
          },
        ],
      }),
      true,
    )
    await queryRunner.createIndex(
      'users',
      new TableIndex({
        name: 'IDX_EMAIL',
        columnNames: ['email'],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(tableName)
    await queryRunner.dropIndex(tableName, 'IDX_EMAIL')
    await queryRunner.dropTable(table)
  }

}

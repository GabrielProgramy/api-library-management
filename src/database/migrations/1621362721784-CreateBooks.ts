import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBooks1621362721784 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'books',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'release_year',
          type: 'integer',
        },
        {
          name: 'publishing_company_id',
          type: 'uuid'
        }
      ],
      foreignKeys: [
        {
          name: 'FKPublishing_company',
          referencedTableName: 'publishing_company',
          referencedColumnNames: ['id'],
          columnNames: ['publishing_company_id'],
          onDelete: 'SET NULL',
          onUpdate: 'SET NULL',
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books');
  }
}

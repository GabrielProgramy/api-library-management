import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAuthors1621521515442 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'authors',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true
        }, {
          name: 'name',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('authors');
  }

}

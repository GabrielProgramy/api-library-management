import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class CreateFKAuthors1621524094824 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('books',
      new TableColumn({
        name: 'author_id',
        type: 'uuid'
      }));

    await queryRunner.createForeignKey('books', new TableForeignKey({
      name: 'FKAuthors',
      referencedTableName: 'authors',
      referencedColumnNames: ['id'],
      columnNames: ['author_id']
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('books', 'FKAuthors');
    await queryRunner.dropColumn('books', 'authors_id');
  }

}

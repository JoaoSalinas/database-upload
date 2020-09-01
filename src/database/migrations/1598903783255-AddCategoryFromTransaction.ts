import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddCategoryFromTransaction1598903783255 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn(
        'transactions',
        new TableColumn(
        {
          name: 'category_id',
          type: 'uuid',
          isNullable: true,
        })
      );

      await queryRunner.createForeignKey(
        'transactions',
        new TableForeignKey({
            name: 'categoryTransaction',
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }),
      );


    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('transections', 'categoryTransaction');
      await queryRunner.dropColumn('transections', 'category_id');
    }

}

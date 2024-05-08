import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring21715158711813 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS complaint (
                reqId INT AUTO_INCREMENT PRIMARY KEY,
                city VARCHAR(255) NOT NULL,
                date DATETIME NOT NULL,
                contractNumber INT NOT NULL,
                complaintType VARCHAR(255) NOT NULL,
                department VARCHAR(255) NOT NULL,
                state ENUM('DONE', 'INACTIVE', 'PROCESSING', 'SUSPENDED') DEFAULT 'INACTIVE'
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS complaint;`);
  }
}

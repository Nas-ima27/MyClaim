/* eslint-disable @typescript-eslint/no-unused-vars */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring11715158636173 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS claim (
                reqId INT AUTO_INCREMENT PRIMARY KEY,
                city VARCHAR(255) NOT NULL,
                date DATETIME NOT NULL,
                policy INT NOT NULL,
                matricule VARCHAR(255) NOT NULL,
                degat ENUM('CORPOREL', 'MATERIEL', 'CORPORELETMATERIEL') NOT NULL,
                state ENUM('DONE', 'INACTIVE', 'PROCESSING', 'SUSPENDED') DEFAULT 'INACTIVE'
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS claim;`);
  }
}

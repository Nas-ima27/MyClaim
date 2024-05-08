/* eslint-disable @typescript-eslint/no-unused-vars */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateClaimTable1612345678902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS request (
        reqId INT AUTO_INCREMENT PRIMARY KEY,
        reqType ENUM('CLAIM', 'COMPLAINT') NOT NULL,
        clientType ENUM('CLIENT', 'AGENT', 'GESTIONNAIRE') NOT NULL,
        clientId INT NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP,
        state ENUM('DONE', 'INACTIVE', 'PROCESSING', 'SUSPENDED') DEFAULT 'INACTIVE'
    );
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS request;`);
  }
}

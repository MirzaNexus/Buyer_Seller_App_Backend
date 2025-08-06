import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductVideoEntity1754513930383 implements MigrationInterface {
    name = 'UpdateProductVideoEntity1754513930383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_videos" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_videos" ADD "duration" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "product_videos" ADD "thumbnail" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_videos" DROP COLUMN "thumbnail"`);
        await queryRunner.query(`ALTER TABLE "product_videos" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "product_videos" DROP COLUMN "title"`);
    }

}

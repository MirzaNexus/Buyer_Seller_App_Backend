import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductVariant1754515845575 implements MigrationInterface {
    name = 'UpdateProductVariant1754515845575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_variants" ADD "is_default" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_variants" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "product_variants" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "product_variants" DROP COLUMN "is_default"`);
    }

}

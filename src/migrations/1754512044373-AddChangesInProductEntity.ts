import { MigrationInterface, QueryRunner } from "typeorm";

export class AddChangesInProductEntity1754512044373 implements MigrationInterface {
    name = 'AddChangesInProductEntity1754512044373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inventory" DROP CONSTRAINT "FK_732fdb1f76432d65d2c136340dc"`);
        await queryRunner.query(`ALTER TABLE "inventory" DROP CONSTRAINT "CHK_1039731bd8150fcc0318f1204c"`);
        await queryRunner.query(`ALTER TABLE "inventory" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "discount_price"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "discount_start_date"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "discount_end_date"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "shipping_weight"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "UQ_c44ac33a05b144dd0d9ddcf9327"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "sku"`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD "discount_start_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD "discount_end_date" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_variants" DROP COLUMN "discount_end_date"`);
        await queryRunner.query(`ALTER TABLE "product_variants" DROP COLUMN "discount_start_date"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "sku" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "UQ_c44ac33a05b144dd0d9ddcf9327" UNIQUE ("sku")`);
        await queryRunner.query(`ALTER TABLE "products" ADD "shipping_weight" numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "products" ADD "discount_end_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "products" ADD "discount_start_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "products" ADD "discount_price" numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "inventory" ADD "product_id" uuid`);
        await queryRunner.query(`ALTER TABLE "inventory" ADD CONSTRAINT "CHK_1039731bd8150fcc0318f1204c" CHECK ((((product_id IS NOT NULL) AND (variant_id IS NULL)) OR ((product_id IS NULL) AND (variant_id IS NOT NULL))))`);
        await queryRunner.query(`ALTER TABLE "inventory" ADD CONSTRAINT "FK_732fdb1f76432d65d2c136340dc" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}

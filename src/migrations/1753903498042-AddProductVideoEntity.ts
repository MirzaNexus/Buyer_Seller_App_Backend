import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProductVideoEntity1753903498042 implements MigrationInterface {
    name = 'AddProductVideoEntity1753903498042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_videos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "is_primary" boolean NOT NULL DEFAULT false, "sort_order" integer NOT NULL DEFAULT '0', "product_id" uuid, CONSTRAINT "PK_705a4fd6bc408b0a8a874f09d7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_videos" ADD CONSTRAINT "FK_4bee29aa25fc3adccf1653731df" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_videos" DROP CONSTRAINT "FK_4bee29aa25fc3adccf1653731df"`);
        await queryRunner.query(`DROP TABLE "product_videos"`);
    }

}

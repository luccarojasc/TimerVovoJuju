import {MigrationInterface, QueryRunner, Table, useContainer} from "typeorm";

export class CreateSettings1673036974965 implements MigrationInterface {
    name = 'CreateSettings1673036974965'

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
        new Table({
            name: "settings",
            columns: [
                {
                    name: "username",
                    type: "string",
                    isPrimary: true,
                },
                {
                    name: "email",
                    type: "string",
                },
                {
                    name: "password",
                    type: "string",
                }
            ]
        })
       )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings")    
    }

}

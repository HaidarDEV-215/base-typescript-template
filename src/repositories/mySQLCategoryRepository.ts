import type { Pool , RowDataPacket , ResultSetHeader } from "mysql2/promise";
import { ICategoryRepository } from "./ICategoryRepository";
import { Category } from "../domain/entities/category";
// Pool            : is a connection managet (groupe of connections)
// RowDataPacket   : represents a record or (row) cames from database
// ResultSetHeader : contains information about operation or query result
// here we use Inerface Segrigation from S.O.L.I.D prinsibles
export class MySQLCategoryRepository implements ICategoryRepository{
    constructor (private pool:Pool)// construct repo with sql connetction # need more explanation!
    {} // why empty constructor?!

    async create(category: Category): Promise<Category> {
        const data = category.toJSON();// transform entity into raw data
        const [result] = await this.pool.execute<ResultSetHeader>(// explain all of these (await this.pool.execute<ResultSetHeader>)
            // <ResultSetHeader> : because this operation  returns information about query , will not return clases
            // sql query
            "INSERT INTO category (name) VALUES (?)",[data.name] // data binding, we use [] arround data.name because execute function returns an array
            
            // why we use brackets (name) there?
        );
        return Category.create({...data, id:result.insertId}) // why do we use constructor here?
    }

    async findById(id: number): Promise<Category | null> {
        const [rows] = await this.pool.execute<RowDataPacket[]> // why do we use RowDataPacket and what do execute function do?
        ("SELECT * FROM category WHERE id = ?",[id] );
        if(rows.length === 0){
            return null;
        }
        else{
            return this.mapToEntity(rows[0]!); // why dose this may be undefined
        }
    }

    async findByName(name:string): Promise<Category | null> {
        const [rows] = await this.pool.execute<RowDataPacket[]> // why do we use RowDataPacket and what do execute function do?
        ("SELECT * FROM category WHERE name = ?",[name] );
        if(rows.length === 0){
            return null;
        }
        else{
            return this.mapToEntity(rows[0]!);
        }
    }

    async findAll(): Promise<Category[]> {
        const [rows] = await this.pool.execute<RowDataPacket[]> // why do we use RowDataPacket and what do execute function do?
        ("SELECT * FROM category ORDER BY name ASC");
        return rows.map(row => this.mapToEntity(row));
    }

    async update(category: Category): Promise<Category> {
        const data = category.toJSON();
        await this.pool.execute<ResultSetHeader>
        ("UPDATE category set name = ? WHERE id = ?",[data.name ,data.id!]); // why updatre name only! what about ather attributes?
        const [rows] = await this.pool.execute<RowDataPacket[]> // why do we use RowDataPacket and what do execute function do?
        ("SELECT * FROM category WHERE id = ?",[data.id!] );
        return this.mapToEntity(rows[0]!);
    }

    async delete(id: number): Promise<void> {
        await this.pool.execute("DELETE FROM category WHERE id = ?",[id]);
    }

    async existByName(name: string): Promise<boolean> {
        const [rows] = await this.pool.execute<RowDataPacket[]>
        ("SELECT Count (*) as count FROM category WHERE name = ?",[name]);
        return rows[0]!.count > 0;
    }

    async count(): Promise<number> {
        const [rows] = await this.pool.execute<RowDataPacket[]>
        ("SELECT Count (*) as count FROM category");
        return rows[0]!.count;
    }

    // buisness logic
    private mapToEntity(row:RowDataPacket):Category{// why RowDataPacket?
        return Category.create({
            id:row.id,
            name: row.name,
            createdAt:row.createdAt,
            updatedAt:row.updatedAt
        });
    }
}
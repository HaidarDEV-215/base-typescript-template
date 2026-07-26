import { Category } from "../domain/entities/category";

export interface ICategoryRepository{
    create(category:Category):Promise<Category>;
    findById(id:number):Promise<Category|null>;
    findByName(name:string):Promise<Category|null>;
    findAll():Promise<Category[]>
    update(category:Category):Promise<Category>;
    delete(id:number):Promise<void>; // why not null ?
    existByName(name:string):Promise<boolean>;
    count():Promise<number>;
}
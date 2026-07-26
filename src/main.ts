// import { Product } from "./domain/aggregates/product";
 import { Category } from "./domain/entities/category";
// import { Color } from "./domain/entities/color";
// import { DomainEventDispatcher } from "./domain/events/base/domainEventDispature";
// import { CategoryCreatedEvent } from "./domain/events/categoryEvent";

import mysql from "mysql2/promise";
import dotenv from "dotenv"
import { MySQLCategoryRepository } from "./repositories/mySQLCategoryRepository";

dotenv.config();

const dbPool = mysql.createPool({
    host:process.env.DB_HOST ||"localhost",
    user:process.env.DB_USER||"root",
    password:process.env.DB_PASSWORD||"",
    database:process.env.DB_NAME||"test",
    waitForConnections:true, // why?
    connectionLimit:10,// why?
    queueLimit:0, // why?
})

const category = Category.create({id:22,name:"electronics",createdAt:new Date(),updatedAt: new Date()});
const category2 = Category.create({id:22,name:"botato",createdAt:new Date(),updatedAt: new Date()});

// dependency injection
const categoryRepo = new MySQLCategoryRepository(dbPool)


//const categorySave = await categoryRepo.create(category);
//const categorySave2 = await categoryRepo.create(category2);
//const categorySave3 = await categoryRepo.create(category);

//console.log(categorySave.getID())
//console.log(categorySave2.getID())

const found = await categoryRepo.findById(3);

console.log(found?.getName());

const all = await categoryRepo.findAll();

console.log(all.length);



































































// /*
// DomainEventDispatcher.register("categoryCreated",(event)=>{
//     const e = event as CategoryCreatedEvent;
//     console.log (e.CategoryId);
//     console.log(e.CategoryName);
// })
// */
// DomainEventDispatcher.register("categoryCreated",(event:CategoryCreatedEvent)=>{
//     console.log (event.CategoryId);
//     console.log(event.CategoryName);
//     console.log(event.toJSON());
    
// })

// const category = Category.create({id:22,name:"electronics",createdAt:new Date(),updatedAt: new Date()});
// // console.log(category.getName());
// // console.log(category.getCeratedAt());
// // console.log(category.getUpdatedAt());


// category.updateName("laptop");
// const color = Color.create({
//     id:1,
//     name:"red",
//     hexCode:"#f00"
// });
// // console.log(color.name);
// // console.log(color.hexCode)
// // console.log(color.getRGB());


// // color.updateHexCode('#090');
// // console.log(color.name);
// // console.log(color.hexCode)
// // console.log(color.getRGB());


// const product = Product.create({
//     id:1,
//     name:"laptop",
//     category,
//     color,
//     price:450
// })

// console.log(product.name);
// console.log(product.color.getRGB());
// product.changePrice(475);
// product.changeColor(Color.create({name:"green",hexCode:"#0a0"}));

// console.log(product.color.getRGB());



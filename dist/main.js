import { Product } from "./domain/aggregates/product.js";
import { Category } from "./domain/entities/category.js";
import { Color } from "./domain/entities/color.js";
import { DomainEventDispatcher } from "./domain/events/base/domainEventDispature.js";
/*
DomainEventDispatcher.register("categoryCreated",(event)=>{
    const e = event as CategoryCreatedEvent;
    console.log (e.CategoryId);
    console.log(e.CategoryName);
})
*/
DomainEventDispatcher.register("categoryCreated", (event) => {
    console.log(event.CategoryId);
    console.log(event.CategoryName);
    console.log(event.toJSON());
});
const category = Category.create({ id: 22, name: "electronics", createdAt: new Date(), updatedAt: new Date() });
// console.log(category.getName());
// console.log(category.getCeratedAt());
// console.log(category.getUpdatedAt());
category.updateName("laptop");
const color = Color.create({
    id: 1,
    name: "red",
    hexCode: "#f00"
});
// console.log(color.name);
// console.log(color.hexCode)
// console.log(color.getRGB());
// color.updateHexCode('#090');
// console.log(color.name);
// console.log(color.hexCode)
// console.log(color.getRGB());
const product = Product.create({
    id: 1,
    name: "laptop",
    category,
    color,
    price: 450
});
console.log(product.name);
console.log(product.color.getRGB());
product.changePrice(475);
product.changeColor(Color.create({ name: "green", hexCode: "#0a0" }));
console.log(product.color.getRGB());

import { Product } from "./domain/aggregates/product";
import { Category } from "./domain/entities/category";
import { Color } from "./domain/entities/color";

const category = Category.create({name:"electronics",createdAt:new Date(),updatedAt: new Date()});
// console.log(category.getName());
// console.log(category.getCeratedAt());
// console.log(category.getUpdatedAt());


const color = Color.create({
    id:1,
    name:"red",
    hexCode:"#f00"
});
// console.log(color.name);
// console.log(color.hexCode)
// console.log(color.getRGB());


// color.updateHexCode('#090');
// console.log(color.name);
// console.log(color.hexCode)
// console.log(color.getRGB());


const product = Product.create({
    id:1,
    name:"laptop",
    category,
    color,
    price:450
})

console.log(product.name);
console.log(product.color.getRGB());
product.changePrice(475);
product.changeColor(Color.create({name:"green",hexCode:"#0a0"}));

console.log(product.color.getRGB());


